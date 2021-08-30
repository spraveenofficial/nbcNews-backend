const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const verifyToken = async (token) => {
    const decodedToken = await jwt.verify(token, process.env.SECRET);
    return decodedToken;
};


module.exports = verifyToken;