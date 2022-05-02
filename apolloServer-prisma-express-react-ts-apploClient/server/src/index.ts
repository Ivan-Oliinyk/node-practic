import { ApolloServer } from "apollo-server";
import express, { Application } from "express";
import { context } from "./context";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";
import config from "./config/index";
import { printServiceRouter } from "./routes/print";

const server = new ApolloServer({ typeDefs, resolvers, context });

const app: Application = express();
const {
  PORT,
  routes: { PRINT },
} = config;

app.use(express.json());
app.use(PRINT, printServiceRouter);

app.listen(PORT, () => {
  console.log(`\n🚀  Server ready at http://localhost:${PORT}/ \n`);
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
