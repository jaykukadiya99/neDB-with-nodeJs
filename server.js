var express = require('express');
var app = express()

app.get("/", (req, res) => {
    res.send("Hello Jk");
})

app.listen(3000);