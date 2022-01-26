const Pokemon = require("../models/pokemon");

const getAllPokemons = (req, res, next) => {
  Pokemon.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

const getPokemonById = (req, res, next) => {
  let id = req.params.id;

  return Pokemon.findByPk(id).then((result) => {
    if (result) {
      res.status(200).json({
        message: "Pokemon found!",
        result: result,
      });
    } else {
      res.status(404).json({
        message: "Pokemon not found!",
      });
    }
  });
};

let getPokemonByName = (req, res, next) => {
  let name = req.params.name;

  Pokemon.findOne({ where: { name: name } }).then((result) => {
    if (result) {
      return res.status(200).json({
        message: "Pokemon found!",
        result: result,
      });
    } else {
      return res.status(404).json({
        message: "Pokemon not found!",
      });
    }
  });
};

const getPokemonBypType = (req, res) => {
  let pType = req.params.ptypeid;

  Pokemon.findByPk(pType).then((result) => {
    if (result) {
      return res.status(200).json({
        message: "Pokemon(s) found!",
        result: result,
      });
    } else {
      return res.status(404).json({
        message: "Pokemon not found!",
      });
    }
  });
};

const getPokemonBysType = (req, res) => {
  let sType = req.params.stypeid;

  Pokemon.findByPk(sType).then((result) => {
    if (result) {
      return res.status(200).json({
        message: "Pokemon(s) found!",
        result: result,
      });
    } else {
      return res.status(404).json({
        message: "Pokemon not found!",
      });
    }
  });
};

let getPokemonBypTypesType = (req, res) => {
  let pType = req.params.ptypeid;
  let sType = req.params.stypeid;

  Pokemon.findByPk(pType, sType).then((result) => {
    if (result) {
      return res.status(200).json({
        message: "Pokemon(s) found!",
        result: result,
      });
    } else {
      return res.status(404).json({
        message: "Pokemon not found!",
      });
    }
  });
};

let deletePokemonById = (req, res) => {
  let id = req.params.id;

  Pokemon.destroy({
    where: { id: id },
  })
    .then((result) => {
      if (result > 0) {
        return res.status(200).json({
          message: "Pokemon deleted!",
        });
      } else {
        return res.status(404).json({
          message: "Can't find any pokemon with that ID",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
};

let deletePokemonByName = (req, res) => {
  let name = req.params.name;

  Pokemon.destroy({
    where: { name: name },
  })
    .then((result) => {
      if (result > 0) {
        return res.status(200).json({
          message: "Pokemon deleted!",
        });
      } else {
        return res.status(404).json({
          message: "Can't find any pokemon with that ID",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
};

let deletePokemonBypType = (req, res) => {
  let pType = req.params.ptypeid;

  Pokemon.destroy({
    where: { ptypeid: pType },
  })
    .then((result) => {
      if (result > 0) {
        return res.status(200).json({
          message: "Pokemon deleted!",
        });
      } else {
        return res.status(404).json({
          message: "Can't find any pokemon with that ID",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
};

let deletePokemonBysType = (req, res) => {
  let sType = req.params.stypeid;

  Pokemon.destroy({
    where: { stypeid: sType },
  })
    .then((result) => {
      if (result > 0) {
        return res.status(200).json({
          message: "Pokemon deleted!",
        });
      } else {
        return res.status(404).json({
          message: "Can't find any pokemon with that ID",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
};

let createPokemon = (req, res) => {
  let name = req.headers.name;
  let pType = req.headers.ptypeid;
  let sType = req.headers.stypeid;

  Pokemon.create({
    name: name,
    ptypeid: pType,
    stypeid: sType,
  })
    .then((result) => {
      return res.status(200).json({
        message: "Pokemon created!",
        result: result,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
};

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
  getPokemonBypType,
  getPokemonBysType,
  getPokemonBypTypesType,
  deletePokemonById,
  deletePokemonByName,
  createPokemon,
  deletePokemonBypType,
  deletePokemonBysType,
};
