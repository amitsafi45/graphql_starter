import { buildSchema } from "type-graphql";

export class TypeGraphQL {
  async Schema() {
    return await buildSchema({
      resolvers: [`${__dirname}/../resolver/*.resolver{.ts,.js}`],

      validate:false,
      emitSchemaFile: false,
    });
  }
}
