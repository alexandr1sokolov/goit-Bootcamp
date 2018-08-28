const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
let ObjectID = require('mongodb').ObjectID;
let db =require('./config/db');
const port = process.env.port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


MongoClient.connect(db.url, (err, client) => {
    let db = client.db('sandbox');
    if (err) return console.log(err);
    require('./routes')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});


// The legacy operation
// MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
//     // Database returned
// });
//
// is replaced with
//     MongoClient.connect('mongodb://localhost:27017/test', (err, client) => {
//         // Client returned
//         var db = client.db('test');
//     });