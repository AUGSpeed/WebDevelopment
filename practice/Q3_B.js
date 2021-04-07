const express = require('express');
var app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
let host = '127.24.4.2'; // Choose a different loopback address
let port = '4674'; // Last digits of your NetID
let path = 'netID';
let count = 0;
let myName = 'Michael;';

let info = {host: host, port: port, path: path, name: myName}

app.listen(port, host, function () {
    console.log("Example app listening on IPv4: " + host +
    ":" + port + "/" + path);
});

app.get("/netID", function(req, res){
	count++;
	res.send(`Name: Michael, NetID: fr5826, Number of visits: ${count}`);
});