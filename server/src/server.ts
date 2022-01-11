import "reflect-metadata";
import dotenv from "dotenv";
import { runConnection } from "./loaders/dbLoader";
import { apolloLoader } from "./loaders/apolloLoader";
import express from "express";
import cors from 'cors';
import {
  ALLOW_ORIGIN,
  PORT,
  __prod__,
} from "./constants/const";
import session from "express-session";
import {sessionConfig, redis} from './config/sessionConfig';
import { startSeed } from "./seeder";
import cookieParser from "cookie-parser";

dotenv.config();


export const app = express();

export const main = async () => {
 
  //Connect DB
  runConnection().catch((err) => {
    console.error(err);
  });
  //Seed with FakeData
  // startSeed()

  //CORS middelware
  app.use(
    cors({
      origin:ALLOW_ORIGIN ,
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

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};
