import {app} from '../server';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import {resolvers} from '../modules/index';
import {PORT} from '../constants/const'


export const apolloLoader=async():Promise<void>=>{

    const apolloServer = new ApolloServer({
        schema:await buildSchema({
            resolvers:resolvers,
            validate:false, 
    
        }),
    }); 
    await apolloServer.start()
    .then(()=>{
        console.log(`🚀 Graphql running at http://localhost:${PORT}/graphql`); 
        apolloServer.applyMiddleware({app});
    })
}