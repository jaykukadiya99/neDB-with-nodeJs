var express = require('express');
var app = express()
require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello Jk");
});