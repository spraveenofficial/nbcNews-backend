const Router = require("express").Router();
const User = require("../database/index");
const dotenv = require("dotenv").config();
const hashPassword = require("../middleware/middleware");
const decryptPassword = require("../middleware/decrypt");
const generateToken = require("../controllers/jwtauth");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/checkAuth");

Router.get("/v1", checkAuth, (req, res) => {
  res.send(req.user);
});

Router.post("/signup", async (req, res) => {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    password: hashPassword(req.body.password),
    userType: "normalUser",
  };
  // const jwtToken = await generateToken(userData);
  const user = await new User(userData)
  user
    .save()
    .then(async (response) => {
      console.log(response);
      res.json({
        status: 200,
        message: "User created successfully",
        token: await generateToken(response),
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        status: 400,
        message: "User Already Exists",
      });
    });
});

Router.post("/login", async (req, res) => {
  const userEmail = req.body.email;
  const userPass = req.body.password;
  const user = await User.findOne({ email: userEmail });
  if (user) {
    const password = await decryptPassword(user.password);
    // const token = await generateToken(userEmail);
    if (userPass === password) {
      res.json({
        status: 200,
        message: "User logged in successfully",
        token: await generateToken(user)
      });
    } else {
      res.json({
        status: 400,
        message: "Wrong password",
      });
    }
  } else {
    res.json({
      status: 400,
      message: "User not found",
    });
  }
});

Router.post("/newspost", checkAuth, async (req, res) => {
  console.log(req.user);
  const data = {
    id: "1",
    title: "req.body.title",
    url: "req.body.url",
    category: "req.body.category",
    description: "req.body.description",
    thumbnailImage: "req.body.thumbnailImage",
    time: "req.body.timestamp",
    author: "req.body.author",
  };
  const news = new User(data);
  news
    .save()
    .then((response) => {
      res.json({
        status: 200,
        message: "News created successfully",
        data: response,
      });
    })
    .catch((error) => {
      res.json({
        status: 400,
        message: error,
      });
    });
});

Router.get("/profile", async (req, res) => {
    console.log(req.headers)
})



module.exports = Router;
