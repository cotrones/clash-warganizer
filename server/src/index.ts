import "dotenv-safe/config";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PlayerResolver } from "./resolvers/player";
import { ClanResolver } from "./resolvers/clan";

const main = async () => {
  const app = express();
  const port = process.env.PORT;

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
      resolvers: [PlayerResolver, ClanResolver],
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
