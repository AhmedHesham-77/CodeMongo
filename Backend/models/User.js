const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
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