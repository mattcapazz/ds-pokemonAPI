const express = require("express");
const pokemonController = require("../controllers/pokemon.controller");
const router = express.Router();

router.get("/", pokemonController.getAllPokemons);
router.get("/:id", pokemonController.getPokemonById);
router.get("/:name", pokemonController.getPokemonByName);
router.get("/:pType", pokemonController.getPokemonBypType);
router.get("/:sType", pokemonController.getPokemonBysType);
router.get("/:pType/:sType", pokemonController.getPokemonBypTypesType);

router.post("/", pokemonController.createPokemon);

//router.put("/:id", pokemonController.updatePokemon);
router.delete("/:id", pokemonController.deletePokemonById);

router.delete("/:name", pokemonController.deletePokemonByName);

router.delete("/:pType", pokemonController.deletePokemonBypType);

router.delete("/:sType", pokemonController.deletePokemonBysType);

module.exports = router;
