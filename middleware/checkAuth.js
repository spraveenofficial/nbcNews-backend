const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  if (req.headers.authorization == "Bearer null") {
    console.log("No authorization");
    res.json({ success: false, message: "Not Authenticated." });
  } else {
    let jwt_token = req.headers.authorization;
    jwt_token = jwt_token.split(" ")[1];
    jwt.verify(jwt_token, process.env.SECRET, function (err, decoded) {
      if (err) {
        return res.json({
          statusCode: 401,
          success: false,
          message: "Token Expired",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};

module.exports = checkAuth;
