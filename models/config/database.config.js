const mongoose = require('mongoose');

var dbURL = 'mongodb://localhost:27017/productstutorial';

module.exports.dbConnection = function () {
    mongoose.connect(dbURL, { useNewUrlParser: true }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect with database, Exiting now', err);
        process.exit();
    })
}