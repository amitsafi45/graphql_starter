import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { MiddlewareFn } from 'type-graphql';
import { IContext } from '../interface/context.interface';
import AppError from '../utilities/errorHandler/appError.utils';

export default class RequestValidator {
    static validate = <T extends object>(classInstance: ClassConstructor<T>): MiddlewareFn<IContext> => {
        return async ({ context }, next) => {

            const { req } = context;
            // *Convert body to class instance

            const convertedObject = plainToClass(classInstance, req.body.variables.data);

            // *Validate the class instance
            let validationMessages: string[] = [];
            const errors = await validate(convertedObject, { whitelist: true, forbidNonWhitelisted: true })
            if (errors.length !== 0) {

                // *Sanitize the error
                errors.forEach(err => {
                    if (!err.constraints && err.children) {
                        // TODO: Need to refactor this
                        if (err.children?.[0].children?.[0] && err.children[0].children[0].constraints) {
                            return validationMessages.push(err.children[0].children[0].constraints[Object.keys(err.children[0].children[0].constraints)[0]])
                        }
                        if (!err.children[0].constraints) return;
                        validationMessages.push(err.children[0].constraints[Object.keys(err.children[0].constraints)[0]])

                    }
                    else {

                        if (!err.constraints) return;
                        validationMessages.push(err.constraints[Object.keys(err.constraints)[0]])

                    }

                })
                throw AppError.BadRequest(validationMessages[0])
            }
            return await next();

        };
    }
}