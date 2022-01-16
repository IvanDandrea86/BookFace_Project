import "reflect-metadata";
import dotenv from "dotenv";
import { runConnection } from "./loaders/dbLoader";
import { apolloLoader } from "./loaders/apolloLoader";
import express from "express";
import cors from 'cors';
import path from 'path'
import {
  ALLOW_ORIGIN,
  PORT,
  __prod__,
} from "./constants/const";
import session from "express-session";
import {sessionConfig} from './config/sessionConfig';
import {Request,Response} from 'express'

// import { startSeed } from "./seeder";


dotenv.config();


export const app = express();

export const main = async () => {
  //Set Start Time
let startTime= new Date();
let nStartTime = Date.now()


   //Connect DB
  runConnection().catch((err) => {
    console.error(err);
  });
  //Seed with FakeData
  // startSeed(60)

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
  
    
    app.use('/static', express.static(path.join(__dirname, '../../app/build/static')));
  app.get('*', ( req:Request,res:Response)=>{
    res.sendFile('index.html', {root: path.join(__dirname, '../../app/build/')});
  });
  

  //Start Apollo Server for graphql
  apolloLoader().catch((err) => {
    console.error(err);
  });
let port= process.env.PORT || 3000
  app.listen( port, () => {
  console.log(startTime,`\n🚀 Server running at: http://localhost:${port}`);
  });

  let nEndTime = Date.now()
  console.log(`\tBookFace_Server v1.0.0\n\tServer up in: ${ String(nEndTime - nStartTime) } milliseconds\n------------------------------------------------`)    
  
};
