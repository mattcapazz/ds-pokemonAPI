const { Sequelize } = require("sequelize");
const config = require("./config");
require("dotenv").config();

const cfg = {
  dialect: process.env.DIALECT,
  host: config.pg.hostname,
  port: config.pg.port,
  database: config.pg.database,
  username: config.pg.username,
  password: config.pg.password,
};

const db = new Sequelize(cfg);
module.exports = db;
