const Pokemon = require("../models/pokemon");

let getAllPokemons = (req, res, next) => {
  Pokemon.findAll()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
};

let getPokemonById = (req, res, next) => {
  let id = req.params.id;

  Pokemon.findByPk(id).then((result) => {
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
  })
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

const getPokemonBypType = (req, res, next) => {
  let pType = req.params.pType;

  Pokemon.findAll({ where : { ptypeid : pType }}).then((result) => {
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
  let sType = req.params.sType;

  Pokemon.findAll({where : { stypeid : sType}}).then((result) => {
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
  let pType = req.params.pType;
  let sType = req.params.sType;

  Pokemon.findAll({where : {ptypeid : pType, stypeid : sType}}).then((result) => {
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
  let pType = req.params.pType;

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
  let sType = req.params.sType;

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
  let name = req.body.name;
  let pType = req.body.pType;
  let sType = req.body.sType;
  let id = Math.floor(Math.random() * (5000 - 0));

  
  Pokemon.create({
    name,
    ptypeid: pType,
    stypeid: sType,
    id
  })
    .then((result) => {
      return res.status(200).json({
        message: "Pokemon created!",
        result
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
};

let updatePokemon = (req,res) => {
  let name = req.body.name
  let pType = req.body.pType
  let sType = req.body.sType
  let id = req.params.id

  Pokemon.update({
      name: name,
      ptypeid : pType,
      stypeid : sType
  },{
      where: {
          id: id
      }
  })
  .then((result) => {
      if(result > 0) {
          return res.status(200).json({
              message: "Pokemon updated!"
          })
      }else{
          return res.status(404).json({
              message: "Couldn't find any Pokemon with that ID"
          })
      }
  })
  .catch((err) => {
      return res.status(500).json({
          message: err.message
      })
  })
}

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
  updatePokemon
};
