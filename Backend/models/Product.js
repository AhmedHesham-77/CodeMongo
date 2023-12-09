const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    img: { // img URL:
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        ref: 'User',
        required: true
    }
});

const Product = mongoose.model('Product' , productSchema);
module.exports = Product;