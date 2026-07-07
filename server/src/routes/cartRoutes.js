const express = require("express");

const router = express.Router();

const { addToCart, getCart} = require("../controllers/cartControllers");

const authMiddleware = require("../middleware/authmiddleware");

router.get(
    "/",
    authMiddleware,
    getCart
);

router.post(
    "/",
    authMiddleware,
    addToCart
);

module.exports = router;