const connect = require('camo').connect;
const Movie = require('./camoDoc');
const dataDoc = require('./dataDoc');
const express = require('express');
const CryptoJS = require('crypto-js');
const app = express();

require('dotenv').config();


const port = process.env.PORT || 3000;

var database;
// var uri = 'mongodb://localhost:27017/mongojk';
const uri = 'nedb://dbs/';

connect(uri).then(function(db) {
    database = db;
});

app.listen(port, () => console.log(port));

app.get('/', async(req, res) => {
    return res.send(await Movie.findAllRMovies());
});

app.get('/add', async(req, res) => {

    var obj = {};
    obj['name'] = 'kinjal';
    obj['surname'] = 'bathani';

    var thor = Movie.create({
        title: 'Thor',
        rating: 'PG-13',
        dataObj: obj,
    });
    thor.save();

    res.redirect('/');
});

app.get('/addData', async(req, res) => {

    var thor = Movie.create({
        title: 'Thor',
        rating: 'PG-13',
        releaseDate: new Date(2011, 4, 2),
        hasCreditCookie: true
    });
    console.log(1);
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(thor), 'jk').toString();
    console.log(1);
    var data = dataDoc.create({
        title: ciphertext
    });
    console.log(1);
    data.save();
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'jk');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // var encrypted = await CryptoJS.AES.encrypt(d, pass);
    res.send({ ciphertext, decryptedData });
});


// .then(async function(t) {
//     console.log(await Movie.findAllRMovies());
// });