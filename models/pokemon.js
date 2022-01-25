const { Sequelize } = require("sequelize");
const database = require("../cfg/database");

const Pokemon = database.define("pokemon", {
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

module.exports = Pokemon;
