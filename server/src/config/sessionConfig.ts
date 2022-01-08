import  { SessionOptions } from "express-session"

import connectRedis from "connect-redis";
import session from "express-session";
import Redis from "ioredis";
import {
    REDIS_HOST,
    REDIS_PORT,
    SECRET,
    OneDay,
    __prod__,
    COOKIENAME,
  } from "../constants/const";

  const RedisStore = connectRedis(session);
  //Client ioRedis
export const redis= new Redis(`redis://${REDIS_HOST}:${REDIS_PORT}`)

export const sessionConfig:SessionOptions | undefined={
    
        store: new RedisStore({ 
          client: redis,
          disableTouch:true
        }),
        secret: SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: { 
          maxAge: OneDay,
          httpOnly:true,
          sameSite:"lax",
          secure:__prod__,
        },
        name: COOKIENAME,
      
}
redis.on('error', function (err) {
  console.log('Could not establish a connection with redis. ' + err);
});
redis.on('connect', function (err) {
  console.log('🚀 Redis Connected');
});
