import "reflect-metadata";
import dotenv from "dotenv";
import { runConnection } from "./loaders/dbLoader";
import { apolloLoader } from "./loaders/apolloLoader";
import express from "express";
import cors from 'cors';
import {
  PORT,
  __prod__,
} from "./constants/const";
import session from "express-session";
import {sessionConfig, redis} from './config/sessionConfig';
import { startSeed } from "./seeder";

dotenv.config();


export const app = express();

export const main = async () => {
  
  
  //Connect DB
  runConnection().catch((err) => {
    console.error(err);
  });

//  startSeed();


  app.set("trust proxy", 1);
  //CORS middelware
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  //Session middleware
  app.use(
    session(sessionConfig)
  );

  //Start Apollo Server for graphql
  apolloLoader().catch((err) => {
    console.error(err);
  });



  // TEST Redis CONNECTION
  // redis.set('key3', 'Ivan4');
  // const value =  await redis.get('key');
  // console.log(value)

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};
