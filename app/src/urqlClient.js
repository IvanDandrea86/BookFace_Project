import { 
    createClient, 
    ssrExchange, 
    dedupExchange, 
    cacheExchange, 
    fetchExchange } from 'urql';

// if there is no window we are in the server 
const isServerSide = typeof window === "undefined";
// we have to tell it if we are in the Client or not
const ssrCache = ssrExchange({isClient: !isServerSide});
const client = createClient ({
    url: "http://localhost:4000/graphql",
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    fetchOptions: () => {
        return { headers: {}};
    },
});

export {client, ssrCache};