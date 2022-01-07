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
import { createClient } from "redis";


dotenv.config();

export const app = express();

export const main = async () => {
  
  //Connect DB
  runConnection().catch((err) => {
    console.error(err);
  });


  const RedisStore = connectRedis(session);
  const redisClient =  createClient({
    url: `redis://${REDIS_SECRET}@${REDIS_HOST}:${REDIS_PORT}`
  });
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
// Redis Connect
  app.use(
    session({
      store: new RedisStore({ 
        client: redisClient,
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
      name: "sessionID",
    })
  );

   //Start Apollo Server for graphql
   apolloLoader().catch((err) => {
    console.error(err);
  });
 

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};
