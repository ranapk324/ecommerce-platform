const express = require("express");

const router = express.Router();

const { createOrder , getMyOrders , getOrderById ,getAllOrders} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");


router.get(
    "/",
    authMiddleware,
    getMyOrders
);

router.get(
    "/all",
    authMiddleware,
    adminMiddleware,
    getAllOrders
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