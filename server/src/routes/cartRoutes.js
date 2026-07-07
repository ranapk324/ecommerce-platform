const express = require("express");

const router = express.Router();

const { addToCart, getCart ,updateCartItem,removeCartItem} = require("../controllers/cartControllers");

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

router.delete(
    "/:productId",
    authMiddleware,
    removeCartItem
);

module.exports = router;