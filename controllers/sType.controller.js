const sType = require("../models/stype");

let getAllsType = (req,res) => {
    sType.findAll()
    .then((result) => {
        return res.status(200).json(result)
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message,
        })
    })
}

let getsTypeById = (req, res) => {
    let id = req.params.id

    sType.findByPk(id)
    .then((result) => {
        if(result) {
            return res.status(200).json({
                message: "Secondary Type found!",
                result: result
            })
        }else{
            return res.status(404).json({
                message: "Secondary Type not found!"
            })
        } 
    })
}

let createsType = (req,res) => {
    let name = req.params.name
    let id = Math.floor(Math.random() * (5000 - 0))

    sType.create({
        name
    })
    .then((result) => {
        return res.status(200).json({
            message: "Secondary Type created!",
            result
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message
        })
    })
}

let deletesType = (req,res) => {
    let id = req.params.id
    
    sType.destroy({
        where: {
            id:id
        }
    })
    .then((result) => {
        if (result > 0) {
            return res.status(200).json({
                message: "Secondary Type deleted!"
            })
        }else{
            return res.status(404).json({
                message: "Counldn't find a Secondary Type with that ID"
            })
        }
    })
}

let updatesTypeById = (req,res) => {
    let name = req.body.name
    let id = req.params.id

    sType.update({
        name: name
    },{
        where: {
            id: id
        }
    })
    .then((result) => {
        if(result > 0) {
            return res.status(200).json({
                message: "Secondary Type updated!"
            })
        }else{
            return res.status(404).json({
                message: "Couldn't find Secondary Type with that ID"
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
    getAllsType,
    getsTypeById,
    createsType,
    deletesType,
    updatesTypeById
}