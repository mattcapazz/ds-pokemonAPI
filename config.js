require('dotenv').config();

module.exports = {
    port:       process.env.PORT || 3000,
    version:    process.env.VERSION,
    hostname:   process.env.HOSTNAME || "localhost",

    pg: {
        hostname: process.env.POSTGRES_HOSTNAME,
        port: process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DATABASE,
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD
    },

    swaggerPort: process.env.SWAGGER_PORT || "3001"
};