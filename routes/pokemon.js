const express = require("express");
const pokemonController = require("../controllers/pokemon.controller.js");

const router = express.Router();

router.get("/", pokemonController.getAllPokemons);
router.post("/", pokemonController.createPokemon);
router.get("/:id", pokemonController.getPokemonById);
router.put("/:id", pokemonController.updatePokemon);
router.delete("/:id", pokemonController.deletePokemonById);
router.get("/:name", pokemonController.getPokemonByName);
router.delete("/:name", pokemonController.deletePokemonByName);
router.get("/:pType", pokemonController.getPokemonBypType);
router.delete("/:pType", pokemonController.deletePokemonBypType);
router.get("/:sType", pokemonController.getPokemonBysType);
router.delete("/:sType", pokemonController.deletePokemonBysType);
router.get("/:pType/:sType", pokemonController.getPokemonBypTypesType);

module.exports = router;
