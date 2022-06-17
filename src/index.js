const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DbContext


// Controllers
require('./controllers/usersController')(app);

app.listen(process.env.LISTEN_PORT);