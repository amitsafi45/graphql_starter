import DotenvConfig from "../config/dotenv.config";

export enum STATUS {
    SUCCESS = "success",
    FAIL = "fail",
    ERROR = "error"
}

export const createdMessage = (title: string) => {
    return `${title} created successfully`;
}
export const updatedMessage = (title: string) => {
    return `${title} updated successfully`;
}

export const deletedMessage = (title: string) => {
    return `${title} deleted successfully`;
}


export const Message = {
    APP_CREATED: (port: number) => `${DotenvConfig.APP_NAME} is running on http://localhost:${port}`,

    PASSWORD_LENGTH_ERROR: "Password length should be at least 8 to 20 characters",
    PASSWORD_VALIDATION_ERROR: "Password should contain at least one uppercase, one lowercase, one number and one special character",


    DB_CONNECTION_SUCCESS: "Database connection successful",
    DB_CONNECTION_FAIL: "Database connection failed",

    USER_TOKEN_MISSING: "Authentication token missing",
    USER_UNAUTHORIZED: "You are not authorized to access this resource",

    INTERNAL_SERVER_ERROR: "Something went wrong",

    USER_REGISTERED_SUCCESS: "User registered successfully",
    USER_LOGGED_IN_SUCCESS: "User logged in successfully",
    USER_LOGGED_OUT_SUCCESS: "User logged out successfully",
    USER_VERIFIED_SUCCESS: "User verified successfully",
    USER_UPDATED_SUCCESS: "User updated successfully",

    USER_VERIFICATION_SEND_EMAIL_SUCCESS: "Verification email sent successfully",

    USER_REGISTERED_FAIL: "User registration failed",
    USER_LOGGED_OUT_FAIL: "User logout failed",
    USER_LOGGED_IN_FAIL: "User login failed",
    USER_VERIFIED_FAIL: "User verification failed",

    USER_ALREADY_EXISTS_ERROR: "User already exists",
    USER_ALREADY_VERIFIED_ERROR: "User already verified",
    USER_NOT_FOUND_ERROR: "User not found",
    USER_NOT_VERIFIED_ERROR: "User not verified",
    USER_NOT_LOGGED_IN_ERROR: "User not logged in",
    USER_NOT_AUTHORIZED_ERROR: "You are not authorized to access this resource",
    USER_NOT_AUTHENTICATED_ERROR: "User not authenticated",
    EMAIL_NOT_SENT_ERROR: "Email not sent",
    INVALID_EMAIL_OR_PASSWORD_ERROR: "invalid email or password",
    PASSWORD_AND_CONFIRM_PASSWORD_MISMATCH_ERROR: "password and confirm password mismatch",
    INVALID_TOKEN_ERROR: "Invalid token",
    SUPER_ADMIN_ALREADY_EXISTS_ERROR: "Super admin already exists for this ward number",

    EMAIL_SENT_SUCCESS: "Email sent successfully",
    INVALID_EMAIL: "Invalid email",
    INVALID_INPUT: "Invalid input",
    ADDRESS_NOT_FOUND: "Address not found",
    GIVEN_PHONE_IS_ALREADY_USE: "Given phone number is already use",
    INVALID_PHONE_NUMBER: " Invalid phone number",
    PASSWORD_NOT_MATCH: "Password not Match"
}



