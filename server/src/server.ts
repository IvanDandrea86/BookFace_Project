import "reflect-metadata";
import dotenv from "dotenv";
import { runConnection } from "./loaders/dbLoader";
import { apolloLoader } from "./loaders/apolloLoader";
import express from "express";
import cors from 'cors';
import {
  PORT,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_SECRET,
  OneDay,
  __prod__,
} from "./constants/const";
import connectRedis from "connect-redis";
import session from "express-session";
import Redis from "ioredis";


dotenv.config();

export const app = express();

export const main = async () => {
  
  
  //Connect DB
  runConnection().catch((err) => {
    console.error(err);
  });

 
 

  const RedisStore = connectRedis(session);
  //Client ioRedis
  const redis= new Redis(`redis://${REDIS_HOST}:${REDIS_PORT}`)

  // TEST CONNECTION
  // await redisClient.set('key2', 'Ivan');
  // const value = await redisClient.get('key');
  // console.log(value)

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(
    session({
      store: new RedisStore({ 
        client: redis,
        disableTouch:true
      }),
      secret: REDIS_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: { 
        maxAge: OneDay,
        httpOnly:true,
        sameSite:"lax",
        secure:__prod__,
      },
      name: "qid",
    })
  );

  //Start Apollo Server for graphql
  apolloLoader().catch((err) => {
    console.error(err);
  });

  
  app.get("/",(req,res)=>{
    res.send(req.sessionID)
  })
// Redis Connect
 

 

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};
