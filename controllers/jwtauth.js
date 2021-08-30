const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const generateToken = async (data) => {
  const token = await jwt.sign(
    {
      data,
    },
    process.env.SECRET,
    { expiresIn: "7d" }
  );
  return token;
};

module.exports = generateToken

// generateToken();
