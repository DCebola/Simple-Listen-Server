var express = require('express'),
    textBody = require('body'),
    morgan = require('morgan'),
    app = express(),
    util = require('util'),
    colors = require('colors'),
    port = process.env.PORT || 5000;

app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.send("Listening")
})

app.post('/', function (req, res) {
    textBody(req, res, function (err, body) {
        if (err) {
            res.statusCode = 500;
            return res.end('Error');
        }
        res.end(body);
    });
});

app.listen(port, function () {
    console.log("Starting")
});