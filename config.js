const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  db_host: process.env.db_host,
  db_name: process.env.db_name,
  db_user: process.env.db_user,
  db_pwd: process.env.db_pwd,
};
