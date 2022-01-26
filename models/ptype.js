const { Sequelize } = require("sequelize");
const database = require("../cfg/database");

const pType = database.define("ptype", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = pType;
