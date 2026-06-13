const express = require("express");

const router = express.Router();

const { createProduct } = require("../controllers/productController");

const authMiddleware = require("../middleware/authmiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    createProduct
);

module.exports = router;