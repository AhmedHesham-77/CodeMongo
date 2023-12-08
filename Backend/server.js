const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET' , 'POST'],
    credentials: true,
}));
app.use(cookieParser());

const PORT = 5000;
const DB_URI = 'mongodb+srv://mohamedmahmoudmido15:KnUbHyhbblVARCuN@cluster0.kn6n32y.mongodb.net/';

app.get('/' , (req , res) => {
    res.send('DONE');
})

app.post('/api/users/signup' , async (req , res) => {
    const { username , email , password } = req.body;
    let user = await User.findOne({username: username});
    if (user)
        return res.status(400).send('Username already taken');
    user = new User({username , email , password});
    await user.save();
    return res.json(user);
});

app.post('/api/users/signin' , async (req , res) => {

    const { email , password } = req.body;

    // NOT EMPTY:
    if (!email) return res.status(400).send('Email is required');
    if (!password) return res.status(400).send('Password is required');

    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).send("User with given email doesn't exist");

    if(user){
        bcrypt.compare(password , user.password , (err , response) => {
            if(response){
                // Generate token.
                const SECRET_KEY = 'strongUniqueAndRandom';
                const token = jwt.sign({email: user.email , role: user.role} , SECRET_KEY , {expiresIn: '1d'});
                res.cookie('token' , token); // STORE INSIDE THE COOKIE.
                // localStorage.setItem('email' , user.email);
                return res.json({STATUS: "OK" , ROLE: user.role , EMAIL: user.email , TOKEN: token});
            } else {
                return res.json('The password incorrect');
            }
        });
    } else {
        res.json("User doesn't exist");
    }
});


mongoose.connect(DB_URI).then(() => {
    console.log('The Mongo DB Running Successfully');
    app.listen(PORT , () => {
        console.log(`The Server Running On The Port ${PORT} Successfully`);
    });
}).catch(() => {
    console.log('The Mongo DB Start Failed');
});