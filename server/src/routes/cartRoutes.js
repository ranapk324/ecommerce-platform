const express = require("express");

const router = express.Router();

const { addToCart, getCart ,updateCartItem} = require("../controllers/cartControllers");

const authMiddleware = require("../middleware/authmiddleware");

router.get(
    "/",
    authMiddleware,
    getCart
);

router.put(
    "/:productId",
    authMiddleware,
    updateCartItem
);

router.post(
    "/",
    authMiddleware,
    addToCart
);

module.exports = router;