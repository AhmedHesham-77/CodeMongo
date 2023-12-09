const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        defualt: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcat&psig=AOvVaw0-B15-2UXthxZFyrIDFbQR&ust=1702148577376000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJCC1d7DgIMDFQAAAAAdAAAAABAE"
    },
    balance: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    role: {
        type: String,
        default: "visitor"
    }
});

userSchema.pre('save' , async function (next) {
    const salt = await bcryptjs.genSalt(10);
    const hashed = await bcryptjs.hash(this.password , salt);
    this.password = hashed;
    next();
});

User = mongoose.model('User' , userSchema);
module.exports = User;