import "dotenv-safe/config";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
  const app = express();
  const port = process.env.PORT;

  app.use(morgan("dev"));
  app.use(
    helmet({
      // needed to use apollo graphql studio sandbox in dev
      contentSecurityPolicy:
        process.env.NODE_ENV === "production" ? undefined : false,
    })
  );
  app.use(
    cors({
      origin: "*", // needed to use apollo graphql studio sandbox in dev
      // origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
    }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
