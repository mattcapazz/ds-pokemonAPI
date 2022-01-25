const config = require("./config");
const Pool = require("pg-pool");

module.exports = new Pool({
  user: config.pg.username,
  password: config.pg.password,
  host: config.pg.hostname,
  port: config.pg.port,
  database: config.pg.database,
  strictSSL: false,
  max: 1,
});
