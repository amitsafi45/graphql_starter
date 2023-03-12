import "reflect-metadata";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { AppDataSource } from "./config/database.config";
import DotenvConfiguration from "./config/dotenv.config";
import { Apollo } from "./config/apolloServer.config";

async function bootStrap() {
  await new AppDataSource().Connection.initialize()
  const app = express();
  const httpServer = http.createServer(app);
  const server = await new Apollo().server(httpServer);
  await server.start();
  app.use(
    "/",
    cors<cors.CorsRequest>({ origin: "*" }),
    bodyParser.json(),
    expressMiddleware(server, {
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
  bootStrap();
} catch (error: unknown) {
  console.log(error);
  process.exit(1);
}
