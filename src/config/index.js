import dotenv from 'dotenv';

dotenv.config();

export const appPort = process.env.APP_PORT || 3000;

export const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
export const MYSQL_PORT = process.env.MYSQL_PORT || 3306;
export const MYSQL_USER = process.env.MYSQL_USER
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'password';
export const MYSQL_DB = process.env.MYSQL_DB || 'koa_db';