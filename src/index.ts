import "reflect-metadata"

import { ApolloServer, ContextFunction } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone';

import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ArgumentValidationError } from "type-graphql";
import { DateTimeResolver } from 'graphql-scalars'
import { GraphQLScalarType } from 'graphql'
import { AppDataSource } from "./config/database.config";
import { TypeGraphQL } from "./config/typeGraphQL.config";
import DotenvConfiguration from "./config/dotenv.config";
import { Environment } from "./constant/enum";
import customFormatError from "./utilities/errorHandler/customFormatError";
async function main() {
    const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
 schema: await new TypeGraphQL().Schema(),
 csrfPrevention: false,
  introspection: DotenvConfiguration.NODE_ENV === Environment.DEVELOPMENT ? true : false,
  includeStacktraceInErrorResponses: DotenvConfiguration.NODE_ENV === Environment.DEVELOPMENT ? true : false,
 formatError: (formattedError, error) => {

  return customFormatError(formattedError);
},
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
    '/',
    cors<cors.CorsRequest>({ origin: "*" }),
    bodyParser.json(),
    expressMiddleware(server,{
      context: async ({ req, res }) => ({
        req,
        res,
      }),
    })

  
  );

  httpServer.listen(DotenvConfiguration.PORT, () => {
    console.log(
      `Server started at http://localhost:${DotenvConfiguration.PORT}/graphql`
    );
  });

}
try {
  main();
} catch (error: unknown) {
  console.log(error);
  process.exit(1);
}