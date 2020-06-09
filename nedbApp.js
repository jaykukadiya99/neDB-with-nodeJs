const express = require('express');
const app = express()
const Datastore = require('nedb');

require('dotenv').config();

const port = process.env.PORT || 3000;

db = new Datastore({ filename: 'testdb.db', autoload: true });

app.listen(port);

app.get("/", (req, res) => {
    db.find({}, function(err, docs) {
        res.send(docs);
    });
});

app.get("/insert", (req, res) => {
    db.insert({ a: 42 }, function(err, newDocs) {
        res.send(newDocs);
    });
})