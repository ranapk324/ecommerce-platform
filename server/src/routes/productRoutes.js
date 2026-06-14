const express = require("express");

const router = express.Router();

const { createProduct , getProduct} = require("../controllers/productController");

const authMiddleware = require("../middleware/authmiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    createProduct
);

router.get("/",getProduct);

module.exports = router;