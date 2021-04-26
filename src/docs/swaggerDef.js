const { version } = require("../../package.json");

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "node-video-editor API documentation",
    version,
  },
  servers: [
    {
      url: `http://localhost:8080/v1`,
    },
  ],
};

module.exports = swaggerDef;
