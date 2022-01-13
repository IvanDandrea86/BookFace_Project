import {app} from '../server';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import {resolvers} from '../resolvers/index';
import {PORT,ALLOW_ORIGIN} from '../constants/const'
import { MyContext } from 'src/types/types';



export const apolloLoader=async():Promise<void>=>{
  
       const apolloServer = new ApolloServer({
        schema:await buildSchema({
            resolvers:resolvers,
            validate:false, 
        }),
        context: ({ req, res }):MyContext => ({
            req,
            res,

        }),
        formatResponse:(response,query)=>{
            const { context } = query;
            const { res, req: request } = context; // http response and request
            // now you can set http response headers
            res.header('Access-Control-Allow-Origin', ALLOW_ORIGIN)
            const { data } = response;  // graphql response's data
            const { headers = {} } = request; // http request headers
            
            return response
        }
        
    }); 
    await apolloServer.start()
    .then(()=>{
        let startTime= new Date();
           
        console.log(startTime,`\n🚀 Graphql running at:http://localhost:${PORT}/graphql`); 
        apolloServer.applyMiddleware({app,
            cors:{
                credentials:true
            }
            });
    })
}