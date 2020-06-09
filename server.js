var express = require('express');
var app = express()
require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://jay:jk@mongocluster-izqv5.mongodb.net/mongojk?retryWrites=true&w=majority";

const port = process.env.PORT || 3000;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongojk");
    dbo.createCollection("jk", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});

app.get("/", (req, res) => {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mongojk");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("jk").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
    res.send("hi Jay kukadiya ");

});

app.get('/getAll', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mongojk");
        dbo.collection("jk").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});