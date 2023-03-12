export interface IJwtOptions {
    secret: string;
    expiresIn: string;
}

export interface IJwtPayload {
    id: string;
    email: string;
}
export interface IJwtForgetPasswordPayload{
    randomPassword:string
    email:string
}

