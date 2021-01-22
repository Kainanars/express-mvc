const express = require('express');
const model = require('../model/products')
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('products', {
        title: "Magazine Luiza",
        products: model.getProducts()
    });
});

module.exports = router;

