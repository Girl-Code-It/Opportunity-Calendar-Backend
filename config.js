const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  db_host: process.env.db_host,
  db_name: process.env.db_name,
  db_user: process.env.db_user,
  db_pwd: process.env.db_pwd,
  GOOGLE_OAUTH : {
    client_id : process.env.google_client_id,
    client_secret: process.env.google_secret,
    callback : process.env.google_callback
  },
  FRONT_END :{
    url : process.env.front_end_url,
    login_route : process.env.front_end_login_token_route,
    error_handler : process.env.front_end_error_handler
  }
};
