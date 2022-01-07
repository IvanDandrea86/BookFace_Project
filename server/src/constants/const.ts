import dotenv from 'dotenv';
dotenv.config()
export const PORT=process.env.PORT ;
export const __prod__ = process.env.NODE_ENV === 'production';
export const REDIS_SECRET = process.env.REDIS_SECRET;
export const REDIS_PORT = process.env.REDIS_PORT;
export const REDIS_HOST = process.env.REDIS_HOST;
export const OneDay= 1000* 60*60*24

