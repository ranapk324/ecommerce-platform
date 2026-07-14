const express = require("express");

const router = express.Router();

const { createOrder , getMyOrders } = require("../controllers/orderController");

const authMiddleware = require("../middleware/authmiddleware");


router.get(
    "/",
    authMiddleware,
    getMyOrders
);

router.post(
    "/",
    authMiddleware,
    createOrder
);

module.exports = router;