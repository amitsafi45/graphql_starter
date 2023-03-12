import { Environment } from "../constant/enum";
import DotenvConfiguration from "./dotenv.config";
import { TypeGraphQL } from "./typeGraphQL.config";
import { ApolloServer, ContextFunction } from "@apollo/server"
import http from 'http';
import customFormatError from "../utilities/errorHandler/customFormatError";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
export class Apollo{
    
    async server(httpServer:http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>){
      return  new ApolloServer({
            schema: await new TypeGraphQL().Schema(),
            csrfPrevention: false,
             introspection: DotenvConfiguration.NODE_ENV === Environment.DEVELOPMENT ? true : false,
             includeStacktraceInErrorResponses: DotenvConfiguration.NODE_ENV === Environment.DEVELOPMENT ? true : false,
            formatError: (formattedError, error) => {
           
             return customFormatError(formattedError);
           },
             plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
           });
    }
}