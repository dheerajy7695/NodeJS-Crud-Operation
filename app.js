'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/product.route');
const dataConnection = require('./config/database.config');

const app = express();
const port = 6001;

const db = dataConnection.dbConnection();

app.listen(port, () => {
    console.log('Server is running on port - ', port);
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);