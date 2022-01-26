const pType = require("../models/ptype");

let getAllpType = (req,res) => {
    pType.findAll()
    .then((result) => {
        return res.status(200).json(result)
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message,
        })
    })
}

let getpTypeById = (req, res) => {
    let id = req.params.id

    pType.findByPk(id)
    .then((result) => {
        if(result) {
            return res.status(200).json({
                message: "Primary Type found!",
                result: result
            })
        }else{
            return res.status(404).json({
                message: "Primary Type not found!"
            })
        } 
    })
}

let createpType = (req,res) => {
    let name = req.body.name
    let id = Math.floor(Math.random() * (5000 - 0))

    console.log(name)

    pType.create({
        id,
        name
    })
    .then((result) => {
        console.log(result)
        console.log(pType)
        return res.status(200).json({
            message: "Primary Type created!",
            result
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message
        })
    })
}

let deletepType = (req,res) => {
    let id = req.params.id
    
    pType.destroy({
        where: {
            id
        }
    })
    .then((result) => {
        if (result > 0) {
            return res.status(200).json({
                message: "Primary Type deleted!"
            })
        }else{
            return res.status(404).json({
                message: "Counldn't find a Primary Type with that ID"
            })
        }
    })
    .catch((err) => {
        return res.status(500).json({
            message: "Can't delete because there are pokemons associated with it"
        })
    })
}

let updatepTypeById = (req,res) => {
    let name = req.body.name
    let id = req.params.id

    pType.update({
        name: name
    },{
        where: {
            id: id
        }
    })
    .then((result) => {
        if(result > 0) {
            return res.status(200).json({
                message: "Primary Type updated!"
            })
        }else{
            return res.status(404).json({
                message: "Couldn't find Primary Type with that ID"
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
    getAllpType,
    getpTypeById,
    createpType,
    deletepType,
    updatepTypeById
}