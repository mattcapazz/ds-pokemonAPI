const express = require("express");
const cors = require("cors");
const app = express();
const swagger = express();

const config = require("./cfg/config");
const controllers = require("./controllers");
const route = require("./routes");
const services = require("./services");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
swaggerDocument.host = `${config.hostname}:${config.port}`;

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(`/pokemon`, route.pokemon);
app.use(`/pType`, route.pType);
app.use(`/sType`, route.sType);

app.listen(config.port, () => {
  console.log(`Server is running in port ${config.port};`);
});

swagger.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
swagger.listen(config.swaggerPort, () => {
  console.log(`While Swagger is running in port ${config.swaggerPort}.`);
});
