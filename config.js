import { config } from "dotenv";

config();

export const db_host = process.env.db_host;
export const db_name = process.env.db_name;
export const db_user = process.env.db_user;
export const db_pwd = process.env.db_pwd;
