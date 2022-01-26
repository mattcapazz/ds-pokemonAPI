const express = require("express");
const pokemonController = require("../controllers/pokemon.controller");
const router = express.Router();

router.get("/", pokemonController.getAllPokemons);
router.get("/:id", pokemonController.getPokemonById);
router.get("/pokemon/:name", pokemonController.getPokemonByName);
router.get("/pType/:pType", pokemonController.getPokemonBypType);
router.get("/sType/:sType", pokemonController.getPokemonBysType);
router.get("/Type/:pType/:sType", pokemonController.getPokemonBypTypesType);

router.post("/", pokemonController.createPokemon);

router.put("/:id", pokemonController.updatePokemon);

router.delete("/:id", pokemonController.deletePokemonById);

router.delete("/pokemon/:name", pokemonController.deletePokemonByName);

router.delete("/pType/:pType", pokemonController.deletePokemonBypType);

router.delete("/sType/:sType", pokemonController.deletePokemonBysType);

module.exports = router;
