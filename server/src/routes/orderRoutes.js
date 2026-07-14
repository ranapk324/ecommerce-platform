const express = require("express");

const router = express.Router();

const { createOrder , getMyOrders , getOrderById} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authmiddleware");


router.get(
    "/",
    authMiddleware,
    getMyOrders
);

router.get(
    "/:id",
    authMiddleware,
    getOrderById
);

router.post(
    "/",
    authMiddleware,
    createOrder
);

module.exports = router;