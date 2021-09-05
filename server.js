//server.js

//require all dependencies
const express = require('express'); //framework
const MongoClient = require('mongodb').MongoClient;  //databse

//body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP post request
const bodyParser = require('body-parser'); //deal with JSON requests

//require database
const db = require('./config/db');

//initialize app as an instance of express framework
const app = express();
//the app object includes methods for routing HTTP requests, configuring middleware

// make the app to start listening for http requests
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


//connect to the database
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    require('./app/routes')(app, database);
    app.listen(port, () => {  
    console.log('We are live on ' + port);
});

})