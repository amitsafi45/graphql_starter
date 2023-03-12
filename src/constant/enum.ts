import { registerEnumType } from "type-graphql";

export enum Environment{
    DEVELOPMENT="DEVELOPMENT",
    PRODUCTION="PRODUCTION"
}
export enum GraphQlErrorCode {
    GRAPHQL_PARSE_FAILED = "GRAPHQL_PARSE_FAILED", //The GraphQL operation string contains a syntax error.
    GRAPHQL_VALIDATION_FAILED = "GRAPHQL_VALIDATION_FAILED", //The GraphQL operation is not valid against the server's schema.
    BAD_USER_INPUT = "BAD_USER_INPUT", //The user input is invalid.
    UNAUTHENTICATED = "UNAUTHENTICATED", //The user is not authenticated.
    UNAUTHORIZED = "UNAUTHORIZED", //The user is not authorized.
    FORBIDDEN = "FORBIDDEN", //The user is not authorized.
    PERSISTED_QUERY_NOT_FOUND = "PERSISTED_QUERY_NOT_FOUND", //The persisted query was not found.
    PERSISTED_QUERY_NOT_SUPPORTED = "PERSISTED_QUERY_NOT_SUPPORTED", //The persisted query is not supported.
    BAD_REQUEST = "BAD_REQUEST", //The user input is invalid.
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", //The server encountered an internal error and was unable to complete your request.
}



// *This message is thrown there is a validation error
export enum GraphQLErrorMessage {
    GRAPHQL_VALIDATION_ERROR = "Argument Validation Error"
}


export enum Mode {
    BEARER = "Bearer",
    REFRESH = "Refresh",
  }
  
  export enum Role {
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    USER = "USER",
  }
  
  registerEnumType(Role, {
    description: "The roles that  user can have",
    name: "Role",
  });