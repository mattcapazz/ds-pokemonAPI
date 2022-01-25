const { Sequelize } = require("sequelize");
const database = require("../cfg/database");

const sType = database.define("stype", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = sType;
