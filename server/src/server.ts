import "reflect-metadata";
import dotenv from 'dotenv';
import { runConnection } from './loaders/dbLoader';
import { apolloLoader } from "./loaders/apolloLoader";
import express from 'express';
import path from 'path';
import {PORT} from './constants/const'
dotenv.config()
export const app =express();


export const main =async()=>{

//Connect DB
runConnection().catch(err=>{
console.error(err);
})
//Start Apollo Server for graphql
apolloLoader().catch(err=>{
    console.error(err)
})


app.use('/', express.static(path.resolve(__dirname,'../public')))

app.listen(PORT,()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(__dirname)
})


}


