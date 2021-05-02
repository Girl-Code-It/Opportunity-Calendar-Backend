import dotenv from 'dotenv';

dotenv.config();

export const db_host = process.env.db_host;
export const db_name = process.env.db_name;
export const db_user = process.env.db_user;
export const db_pwd = process.env.db_pwd;
export const GOOGLE_OAUTH = {
  client_id : process.env.google_client_id,
  client_secret: process.env.google_secret,
  callback : process.env.google_callback
};
export const FRONT_END = {
  url : process.env.front_end_url,
  login_route : process.env.front_end_login_token_route,
  error_handler : process.env.front_end_error_handler
};
