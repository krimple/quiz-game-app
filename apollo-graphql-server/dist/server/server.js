"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const graphql_1 = require("../graphql");
const schemas_1 = __importDefault(require("../graphql/schemas"));
const dbAPI = __importStar(require("../db/db-api"));
const PORT = 4000;
const app = express_1.default();
const server = new apollo_server_express_1.ApolloServer({ typeDefs: schemas_1.default, resolvers: graphql_1.resolvers });
dbAPI.getQuizzes().then(success => console.dir(success), error => console.dir(error));
server.applyMiddleware({ app });
const httpServer = http_1.createServer(app);
server.installSubscriptionHandlers(httpServer);
// ⚠️ Pay attention to the fact that we are calling `listen` on the http server variable, and not on `app`.
httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
