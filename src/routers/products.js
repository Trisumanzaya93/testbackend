const express = require('express')
const productRouter = express.Router()
const productController = require('./../controllers/products')
const upload = require("../middlewares/upload")

productRouter

        .get('/',  productController.getAllProduct)
        .post('/createproduct',upload,productController.createProduct)
    // .patch('/:productId',upload,productController.updateProduct)
    // .get('/',  productController.getAllProduct)
    // .delete('/:productId',productController.deleteProductById)



module.exports = productRouter