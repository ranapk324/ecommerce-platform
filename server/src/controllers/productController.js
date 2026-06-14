const Product = require("../models/Product")

const createProduct = async(req,res) =>{
    try{
        const{
            name,description,price,image,category,stock
        } = req.body;

        const product = await Product.create({
             name,
            description,
            price,
            category,
            stock,
            image
        });
        res.status(201).json({
            message: "Product Created",
            product
        });
        
    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};

const getProduct = async(req,res) =>{
    try{
       const products = await Product.find();
       res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });

    }
};

const getProductById = async(req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    }
    catch (err){
        res.status(500).json({
            message:err.message
        });

    }
};

const updateProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }

        res.status(200).json({
            message: "Product Updated",
            product
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }

        res.status(200).json({
            message: "Product Deleted"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

module.exports = {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
