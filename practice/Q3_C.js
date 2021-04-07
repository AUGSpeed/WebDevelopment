const express = require('express');
var app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
let host = '127.34.2.8'; // Choose a different loopback address
let port = '3466'; // Last digits of your NetID
let count = 0;
let myName = 'Michael;';

let info = {host: host, port: port, name: myName}

app.listen(port, host, function () {
    console.log("Example app listening on IPv4: " + host +
    ":" + port);
});

app.get("/netID", function(req, res){
	count++;
	res.send(`Name: Michael, NetID: fr5826, Number of visits: ${count}`);
});

app.get("/date", function(req, res){
	let current = new Date();
	let cDate = (current.getMonth() + 1) + '/' + current.getDate() + '/' + current.getFullYear();
	let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
	let dateTime = cDate + ' ' + cTime;
	res.send(`Date: ${dateTime}`)
});