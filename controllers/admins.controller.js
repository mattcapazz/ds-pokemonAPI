const middleware = require("../middleware");

exports.get = async (req, res) => {
  return res
    .status(200)
    .send(await middleware.getAll({ isAdmin: true }))
    .end();
};
