import {WebSocketLink} from "apollo-link-ws";
import {InMemoryCache} from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
console.log('created instance of gameClient script');

// TODO - externalize this setting
const GRAPHQL_ENDPOINT = "ws://localhost:4000/graphql";
// const GRAPHQL_ENDPOINT = "ws://quizzo.chariotsolutions.com/graphql";

const link = new WebSocketLink({
  uri: GRAPHQL_ENDPOINT,
  options: {
    reconnect: true
  }
});
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache
});

export default apolloClient;
