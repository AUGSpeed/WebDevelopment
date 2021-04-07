const express = require('express');
var app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
let host = '127.28.3.5'; // Choose a different loopback address
let port = '5826'; // Last digits of your NetID
let path = 'date';
let myName = 'Michael;';

let info = {host: host, port: port, path: path, name: myName}

app.listen(port, host, function () {
    console.log("Example app listening on IPv4: " + host +
    ":" + port + "/" + path);
});

app.get("/date", function(req, res){
	let current = new Date();
	let cDate = (current.getMonth() + 1) + '/' + current.getDate() + '/' + current.getFullYear();
	let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
	let dateTime = cDate + ' ' + cTime;
	res.send(`Date: ${dateTime}`)
});