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

module.exports = {
    createProduct
};
