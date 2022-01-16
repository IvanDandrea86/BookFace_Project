import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  const url = !process.env.NODE_ENV === 'production' ? 'http://localhost:4000/graphql' : 'http://3ac8yvzvmllpvh:5vu79g37gj9buxmnaz6atkwfq9nwj@eu-west-static-05.quotaguard.com:9293/graphql';
  export const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    credentials:"include",
  });