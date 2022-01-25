const Pokemon = require("../models/pokemon");

let getAllPokemons = (req,res) => {
    Pokemon.findAll()
    .then((result) => {
        return res.status(200).json(result)
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message,
        })
    })
}

let getPokemonById = (req, res) => {
    let id = req.params.id

    Pokemon.findByPk(id)
    .then((result) => {
        if(result) {
            return res.status(200).json({
                message: "Pokemon found!",
                result: result
            })
        }else{
            return res.status(404).json({
                message: "Pokemon not found!"
            })
        } 
    })
}

let getPokemonByName = (req,res) => {
    let name = req.params.name

    Pokemon.findByPk(name)
    .then((result) => {
        if(result){
            return res.status(200).json({
                message: "Pokemon found!",
                result: result
            })
        }else{
            return res.status(404).json({
                message: "Pokemon not found!"
            })
        }
    })
}

let getPokemonBypType = (req,res) => {
    let pType = req.params.ptypeid

    Pokemon.findByPk(pType)
    .then((result) => {
        if(result){
            return res.status(200).json({
                message: "Pokemon(s) found!",
                result: result
            })
        }else{
            return res.status(404).json({
                message: "Pokemon not found!"
            })
        }
    })
}

let getPokemonBysType = (req,res) => {
    let sType = req.params.stypeid

    Pokemon.findByPk(sType)
    .then((result) => {
        if(result){
            return res.status(200).json({
                message: "Pokemon(s) found!",
                result: result
            })
        }else{
            return res.status(404).json({
                message: "Pokemon not found!"
            })
        }
    })
}

let getPokemonBypTypesType = (req,res) => {
    let pType = req.params.ptypeid
    let sType = req.params.stypeid

    Pokemon.findByPk(pType,sType)
    .then((result) => {
        if(result){
            return res.status(200).json({
                message: "Pokemon(s) found!",
                result: result
            })
        }else{
            return res.status(404).json({
                message: "Pokemon not found!"
            })
        }
    })
}

let deletePokemonById = (req,res) => {
    let id = req.params.id

    Pokemon.destroy({
        where: {id : id}
    })
    .then((result) => {
        if(result > 0){
            return res.status(200).json({
                message: "Pokemon deleted!"
            })
        }else{
            return res.status(404).json({
                message: "Can't find any pokemon with that ID"
            })
        }
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message
        })
    })
}

let deletePokemonByName = (req,res) => {
    let name = req.params.name

    Pokemon.destroy({
        where: {name : name}
    })
    .then((result) => {
        if(result > 0){
            return res.status(200).json({
                message: "Pokemon deleted!"
            })
        }else{
            return res.status(404).json({
                message: "Can't find any pokemon with that ID"
            })
        }
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message
        })
    })
}

let deletePokemonBypType = (req,res) => {
    let pType = req.params.ptypeid

    Pokemon.destroy({
        where: {ptypeid : pType}
    })
    .then((result) => {
        if(result > 0){
            return res.status(200).json({
                message: "Pokemon deleted!"
            })
        }else{
            return res.status(404).json({
                message: "Can't find any pokemon with that ID"
            })
        }
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message
        })
    })
}

let deletePokemonBysType = (req,res) => {
    let sType = req.params.stypeid

    Pokemon.destroy({
        where: {stypeid : sType}
    })
    .then((result) => {
        if(result > 0){
            return res.status(200).json({
                message: "Pokemon deleted!"
            })
        }else{
            return res.status(404).json({
                message: "Can't find any pokemon with that ID"
            })
        }
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message
        })
    })
}

let createPokemon = (req,res) => {
    let name = req.body.name
    let pType = req.body.ptypeid
    let sType = req.body.stypeid

    Pokemon.create({
        name: name,
        ptypeid: pType,
        stypeid: sType
    })
    .then((result) => {
        return res.status(200).json({
            message: "Pokemon created!",
            result: result
        })
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
    deletePokemonBysType
}