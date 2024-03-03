const express = require("express");
const mysql = require("mysql");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

const groupsRoutes = require("./groups/groupsRoutes");
const articleRoutes = require("./articles/articleRoutes");
const categoryRoutes = require("./categories/categoryRoutes");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API with Swagger",
      version: "1.0.0",
      description: "A simple REST API with Swagger documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./articles/*.js", "./groups/*.js", "./categories/*.js"],
};

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-caffe", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/groups", groupsRoutes);
app.use("/articles", articleRoutes);
app.use("/categories", categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
