const Order = require("../models/Order");
const Cart = require("../models/Cart");

const createOrder = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            user: req.user.id
        }).populate("items.product");

        if (!cart || cart.items.length === 0) {

            return res.status(400).json({
                message: "Cart is empty"
            });

        }

        let totalAmount = 0;

        const orderItems = cart.items.map(item => {

            totalAmount += item.product.price * item.quantity;

            return {

                product: item.product._id,
                quantity: item.quantity,
                price: item.product.price

            };

        });

        const order = await Order.create({

            user: req.user.id,

            items: orderItems,

            totalAmount

        });

        cart.items = [];

        await cart.save();

        res.status(201).json({

            message: "Order placed successfully",

            order

        });

    } catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

const getMyOrders = async (req, res) => {

    try {

        const orders = await Order.find({
            user: req.user.id
        }).populate("items.product");

        res.status(200).json(orders);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const getOrderById = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id)
            .populate("user", "name email")
            .populate("items.product");

        if (!order) {

            return res.status(404).json({
                message: "Order not found"
            });

        }

        if (order.user._id.toString() !== req.user.id) {

            return res.status(403).json({
                message: "Access denied"
            });

        }

        res.status(200).json(order);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const getAllOrders = async (req, res) => {

    try {

        const orders = await Order.find()
            .populate("user", "name email")
            .populate("items.product");

        res.status(200).json(orders);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

module.exports = {

    createOrder,
    getMyOrders,
    getOrderById,
    getAllOrders

};