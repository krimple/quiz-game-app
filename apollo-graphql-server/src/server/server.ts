import { createServer } from 'http';
import { ApolloServer, PubSub } from 'apollo-server-express';
import express from 'express';
import { resolvers } from '../graphql';
import generateRandomQuestions from './random-question-generator';
import  schema from '../graphql/schemas';

const PORT = 4000;
const app = express();

// used by our subscriptions to get the next question
const questionPubSub = new PubSub();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: (session, ctx) => {
    return {
      PubSub: questionPubSub
    };
  }
});


server.applyMiddleware({app});

generateRandomQuestions(questionPubSub);

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);


// ⚠️ Pay attention to the fact that we are calling `listen` on the http server variable, and not on `app`.
httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
