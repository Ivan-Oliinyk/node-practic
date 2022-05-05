import { ApolloServer } from "apollo-server";
import express, { Application } from "express";
import cors from "cors";
import { context } from "./context";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";
import config from "./config/index";
import { printServiceRouter } from "./routes/print";

const {
  PORT,
  CLIENT_URL,
  routes: { PRINT },
} = config;

const server = new ApolloServer({ typeDefs, resolvers, context });

const app: Application = express();

app.use(
  cors({
    credentials: true,
    origin: CLIENT_URL,
  })
);

app.use(express.json());
app.use(PRINT, printServiceRouter);

app.listen(PORT, () => {
  console.log(`\n🚀  Server ready at http://localhost:${PORT}/ \n`);
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
