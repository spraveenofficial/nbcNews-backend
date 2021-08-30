const crypto = require("crypto");
require("dotenv").config();

const hashPassword = (password) => {
  const cipher = crypto.createCipher("aes-256-cbc", process.env.SECRET);
  var encrypted = cipher.update(password, "utf8", "hex");
  encrypted = encrypted + cipher.final("hex");
  return encrypted;
};


module.exports =  hashPassword
