const services = require("../services");

exports.get = async (req, res) => {
  return res
    .status(200)
    .send(await services.users.getAll({ isAdmin: false }))
    .end();
};

exports.post = async (req, res) => {
  let { email, password, name } = req.body;

  email = email.trim();
  name = name.trim();
  password = password.trim();

  try {
    let id = await services.users.insert({ email, password, name });
    return res.status(201).send({ message: "user created", id }).end();
  } catch (ex) {
    return res
      .status(400)
      .send({ error: ex?.message || "unknown error" })
      .end();
  }
};
