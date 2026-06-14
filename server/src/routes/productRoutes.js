const express = require("express");
const router = express.Router();
const { createProduct , getProduct, getProductById,updateProduct,deleteProduct} = require("../controllers/productController");
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    createProduct
);

router.get("/",getProduct);
router.get("/:id",getProductById)
router.put("/:id", authMiddleware,adminMiddleware,updateProduct)
router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteProduct
);
module.exports = router;