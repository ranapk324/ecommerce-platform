const Cart = require("../models/Cart");
const Product = require("../models/Product");

const addToCart = async (req, res) => {

    try {

        const { productId, quantity } = req.body;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        let cart = await Cart.findOne({
            user: req.user.id
        });

        if (!cart) {

            cart = new Cart({
                user: req.user.id,
                items: []
            });

        }

        const existingItem = cart.items.find(
            item => item.product.toString() === productId
        );

        if (existingItem) {

            existingItem.quantity += quantity;

        } else {

            cart.items.push({
                product: productId,
                quantity
            });

        }

        await cart.save();

        res.status(200).json({
            message: "Product added to cart",
            cart
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const getCart = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            user: req.user.id
        }).populate("items.product");

        if (!cart) {

            return res.status(404).json({
                message: "Cart is empty"
            });

        }

        res.status(200).json(cart);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const updateCartItem = async (req, res) => {

    try {

        const { quantity } = req.body;
        const { productId } = req.params;

        const cart = await Cart.findOne({
            user: req.user.id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        const item = cart.items.find(
            item => item.product.toString() === productId
        );

        if (!item) {

            return res.status(404).json({
                message: "Product not found in cart"
            });

        }

        item.quantity = quantity;

        await cart.save();

        res.status(200).json({
            message: "Cart updated",
            cart
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const removeCartItem = async (req, res) => {

    try {

        const { productId } = req.params;

        const cart = await Cart.findOne({
            user: req.user.id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        cart.items = cart.items.filter(
            item => item.product.toString() !== productId
        );

        await cart.save();

        res.status(200).json({
            message: "Product removed from cart",
            cart
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const clearCart = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            user: req.user.id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        cart.items = [];

        await cart.save();

        res.status(200).json({
            message: "Cart cleared",
            cart
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

module.exports = {
    addToCart,
    getCart,
    updateCartItem,
    removeCartItem,
    clearCart
};