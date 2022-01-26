const { Sequelize } = require("sequelize");
const database = require("../cfg/database");

const pType = require("./ptype");
const sType = require("./stype");

const Pokemon = database.define("pokemons", {
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

Pokemon.belongsTo(pType, {
  constrain: true,
  foreignKey: "ptypeid",
});
Pokemon.belongsTo(sType, {
  constrain: true,
  foreignKey: "stypeid",
});

module.exports = Pokemon;
