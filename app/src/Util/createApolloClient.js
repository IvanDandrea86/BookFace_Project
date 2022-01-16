import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  export const client = new ApolloClient({
    uri: 'http://3ac8yvzvmllpvh:5vu79g37gj9buxmnaz6atkwfq9nwj@eu-west-static-05.quotaguard.com:9293/graphql',
    cache: new InMemoryCache(),
    credentials:"include",
  });