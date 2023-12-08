const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = authMid = (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Unauthorized, please login first');

    try{
        req.user = jwt.verify(token , config.SECRET_KEY);
        next()
    } catch(err){
        return res.status(401).send('Invalid token');
    }
}