import { GraphQLError } from "graphql";

export interface IApolloError extends GraphQLError {
    isOperational: boolean;
    code: string;
    statusCode: number;
    status: string;
}