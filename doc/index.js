const config = require("../config");
const express = require("express");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

swaggerDocument.host = `${config.hostname}:${config.port}`;

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(config.swaggerPort, () => {
  console.log(`swagger server is listening on port ${config.swaggerPort}`);
});
