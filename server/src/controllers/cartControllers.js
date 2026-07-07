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

module.exports = {
    addToCart
};