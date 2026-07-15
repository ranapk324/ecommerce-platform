const express = require("express");

const router = express.Router();

const { createOrder , getMyOrders , getOrderById ,getAllOrders , updateOrderStatus} = require("../controllers/orderController");

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

router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    updateOrderStatus
);

module.exports = router;