import { GraphQLFormattedError } from "graphql";

const handleCustomError = (err: GraphQLFormattedError) => {
    return {
        success: false,
        code: err.extensions?.code,
        message: err.message,
        errors: [{ message: err.message }]
    }


}

export default handleCustomError;