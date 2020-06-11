const connect = require('camo').connect;
const Movie = require('./camoDoc');
const express = require('express');
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
    var thor = Movie.create({
        title: 'Thor',
        rating: 'PG-13',
        releaseDate: new Date(2011, 4, 2),
        hasCreditCookie: true
    });
    thor.save();

    res.redirect('/');
});


// .then(async function(t) {
//     console.log(await Movie.findAllRMovies());
// });