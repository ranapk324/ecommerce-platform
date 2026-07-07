const express = require("express");

const router = express.Router();

const { addToCart } = require("../controllers/cartControllers");

const authMiddleware = require("../middleware/authmiddleware");

router.post(
    "/",
    authMiddleware,
    addToCart
);

module.exports = router;