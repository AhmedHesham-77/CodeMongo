const express = require('express');
const router = express.Router();
const Product = require('./models/Product');


router.post('/', async (req,res)=>{
    const {title, about, img, price} = req.body;

    let product = new Product({title,about,price,img,user: req.user._id});
    product = await product.save();

    return res.send(product);
});

module.exports = router;