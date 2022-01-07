import "reflect-metadata";
import dotenv from "dotenv";
import { runConnection } from "./loaders/dbLoader";
import { apolloLoader } from "./loaders/apolloLoader";
import express from "express";
import path from "path";
import {
  PORT,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_SECRET,
  OneDay,
} from "./constants/const";
import connectRedis from "connect-redis";
import session from "express-session";
import { createClient } from "redis";
import cookieParser from "cookie-parser";

dotenv.config();

export const app = express();

export const main = async () => {
  const RedisStore = connectRedis(session);
  const redisClient = createClient({
    url: `redis://${REDIS_SECRET}@${REDIS_HOST}:${REDIS_PORT}`,
  });

  //Connect DB
  runConnection().catch((err) => {
    console.error(err);
  });
  //Start Apollo Server for graphql
  apolloLoader().catch((err) => {
    console.error(err);
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use("/", express.static(path.resolve(__dirname, "../public")));

  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: REDIS_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: { maxAge: OneDay },
      name: "sessionID",
    })
  );

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};
