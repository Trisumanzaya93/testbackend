const express = require('express')
const productRouter = express.Router()
const productController = require('./../controllers/products')
const upload = require("../middlewares/upload")

productRouter

        .get('/',  productController.getAllProduct)
        .get('/:id',  productController.getProductById)
        .post('/createproduct',upload,productController.createProduct)
        .get('/master/merk',  productController.getmerk)
        .get('/master/groupmodel',  productController.getGroupModel)
        .get('/master/model',  productController.getModel)
    // .patch('/:productId',upload,productController.updateProduct)
    // .get('/',  productController.getAllProduct)
    // .delete('/:productId',productController.deleteProductById)



module.exports = productRouter