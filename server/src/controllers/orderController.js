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

module.exports = {

    createOrder

};