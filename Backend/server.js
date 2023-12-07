const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;
const DB_URI = 'mongodb+srv://mohamedmahmoudmido15:KnUbHyhbblVARCuN@cluster0.kn6n32y.mongodb.net/';

app.get('/' , (req , res) => {
    res.send('DONE');
})

app.post('/api/users' , async (req , res) => {
    const { username , email , password } = req.body;

    let user = await User.findOne({username: username});

    console.log(user);

    if (user){
        return res.status(400).send('Username already taken');
    }



    user = new User({username , email , password});
    await user.save();
    return res.json(user);

});

mongoose.connect(DB_URI).then(() => {
    console.log('The Mongo DB Running Successfully');
    app.listen(PORT , () => {
        console.log(`The Server Running On The Port ${PORT} Successfully`);
    });
}).catch(() => {
    console.log('The Mongo DB Start Failed');
});