import "reflect-metadata";
import dotenv from 'dotenv';
import { runConnection } from './loaders/dbLoader';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import {resolvers} from './modules/index'
import express from 'express';
import path from 'path';

dotenv.config()



export const main =async()=>{
const PORT=process.env.PORT 

//Connect DB
runConnection().catch(err=>{
console.error(err);
})
//Init Server Express
const app =express();

app.use('/', express.static(path.resolve(__dirname,'../public')))

app.listen(PORT,()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(__dirname)
})
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

