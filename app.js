const express = require("express");
const cors = require("cors");
const app = express();
const swagger = express();

const config = require("./config");
const controllers = require("./controllers");
const services = require("./services");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
swaggerDocument.host = `${config.hostname}:${config.port}`;

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
[
  ["get", "/api/version", controllers.version.get, {}],
  ["get", "/api/users", controllers.users.get, { requiresAuth: true }],
  ["post", "/api/users", controllers.users.post, { requiresAuth: true }],
  ["get", "/api/admins", controllers.admins.get, { requiresAuth: true }],
].forEach((r) => {
  const [method, url, controller, permissions] = r;

  app[method](
    url,
    // middleware para fazer log dos requests
    async (req, res, next) => {
      console.log(`[${req.socket.remoteAddress}] ${req.method} ${url} `);
      return next();
    },
    // middleware para verificar autenticação
    async (req, res, next) => {
      if (
        !permissions.requiresAuth ||
        (await services.users.canAuth(req.headers))
      ) {
        return next();
      }

      return res
        .status(401)
        .send({
          error: "É necessário colocar email e password válidos nos headers",
        })
        .end();
    },
    controller
  );
});
app.listen(config.port, () => {
  console.log(`Server is running in port ${config.port};`);
});

swagger.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
swagger.listen(config.swaggerPort, () => {
  console.log(`While Swagger is running in port ${config.swaggerPort}.`);
});
