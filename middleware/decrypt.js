const crypto = require("crypto");
const dotenv = require("dotenv").config();

const crackPassword = (password) => {
    const deciper = crypto.createDecipher("aes-256-cbc", process.env.SECRET);
    var encrypted = deciper.update(password, "hex", "utf8");
    encrypted = encrypted + deciper.final("utf8");
    return encrypted;
};


module.exports = crackPassword;