var express = require('express');
var app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
