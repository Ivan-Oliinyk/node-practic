const Pool = require("pg").Pool;
const config = require("../config");
const {
  DB: { DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_USER },
} = config;

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
});

module.exports = pool;
