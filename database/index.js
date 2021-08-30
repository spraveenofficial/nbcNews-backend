const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const env = require("dotenv").config();

mongoose
  .connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log('Error while connecting');
});


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("nbcUsers", UserSchema);