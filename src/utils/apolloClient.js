import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () =>
  new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

export default createApolloClient;
