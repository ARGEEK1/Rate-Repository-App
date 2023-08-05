import ApolloClient from "apollo-boost";

const createApolloClient = () =>
  new ApolloClient({
    uri: "http://localhost:4000/graphql",
  });

export default createApolloClient;
