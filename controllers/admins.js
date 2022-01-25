const services = require("../services");

exports.get = async(req, res) => {
    return res
        .status(200)
        .send(await services.users.getAll({isAdmin: true}))
        .end();
}