const express = require("express");

const app = express();

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Ecommerce API");
});

module.exports = app;