const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Ecommerce API");
});

module.exports = app;