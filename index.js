const express = require('express');
const dotenv = require('dotenv').config();
const database = require('./database/index');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan")

// Express urlencoded
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express to handle all requests
app.use('/', require('./routes/index'));


app.listen (PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});