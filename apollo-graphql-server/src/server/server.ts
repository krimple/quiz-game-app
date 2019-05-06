import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { resolvers } from '../graphql';
import  schema from '../graphql/schemas';
import * as dbAPI from '../db/db-api';
const PORT = 4000;
const app = express();
const server = new ApolloServer({ typeDefs: schema, resolvers });

dbAPI.getQuizzes().then(
  success => console.dir(success),
  error => console.dir(error)
);

server.applyMiddleware({app});

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);


// ⚠️ Pay attention to the fact that we are calling `listen` on the http server variable, and not on `app`.
httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
