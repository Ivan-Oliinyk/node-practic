require("dotenv").config();
const database = require("./dataBase");

module.exports = {
  PORT: process.env.PORT || 8080,
  SERVER_URL: "http://" + process.env.SERVER_HOST + ":" + process.env.PORT,
  DB: database,
};
