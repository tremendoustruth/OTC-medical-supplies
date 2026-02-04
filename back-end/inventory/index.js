const express = require("express");
const app = express();
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json')

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const inventoryRoutes = require("./inventoryRoutes");

app.use(morgan("dev"));
app.use("/inventory", inventoryRoutes);

const { client } = require("./inventoryController");


async function startServer() {
  await client.connect(); // connect to MongoDB
  app.listen(9876, () => console.log("Inventory running on 9876"));
}

// Start the server
startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Closing MongoDB client.");
  await client.close();
  process.exit(0);
});


