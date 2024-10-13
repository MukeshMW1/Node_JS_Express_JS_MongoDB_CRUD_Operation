const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
require("dotenv").config();
const connectionString = process.env.CONNECTIONSTRING;

app.use(express.json());
app.use("/api/products", productRoute);

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("The database is connected");
    app.listen(3000, () => {
      console.log("Server is running in port 3000");
    });
  })
  .catch((err) =>
    console.log("There was an error connecting to the database", err)
  );
