import { IsEmail, IsNotEmpty } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Login{
    @Field(()=>String)
    accessToken!:string

    @Field(()=>String)
    refreshToken!:string

}

@InputType()
export class SignInInput{
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email!:string

    @Field()
    @IsNotEmpty()
    password!:string

}