// deployTest.js
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
let host = '127.0.0.1';
const port = 3013; // !!! WARNING YOU MUST CONFIGURE THIS CORRECTLY WHEN WE DEPLOY !!!
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));

let count = 0; // Visit count
let startDate = new Date(); // Server start Date time
let yourName = "Michael LaRussa";
let netId = "fr5826";

let info = {host: host, port: port, name: yourName}

const data = require('./public/eventData.json');


var memberApplications = [];


app.get('/', function (req, res) {
    count++;
	let info = {host: host, port: port, name: yourName, count: count, netID: netId}
    res.render('index.njk', info);
});

app.get('/login', function(req, res){
    let info = {host: host, port: port, name: yourName, count: count, netID: netId}
	res.render('login.njk', info);
})

app.get('/membership', function(req, res){
    let info = {host: host, port: port, name: yourName, count: count, netID: netId}
	res.render('membership.njk', info);
})

app.get('/activities', function(req, res){
    let info = {activities: data}
	res.render('activities.njk', info);
})

app.post('/membershipSignup', function(req, res){
	var temp = [];
	temp.push(req.body.name, req.body.email, req.body.game);
	memberApplications.push(temp);
	console.log(memberApplications);
	let info = {name: temp[0], email: temp[1], game: temp[2]}
	res.render('thanks.njk', info);
})

app.get('/serverId', function(req, res) {
	res.json({
    "studentName": "Michael LaRussa",
    "netId": "fr5826",
    "message": "Mod all the things!"
});
})



app.listen(port, host, function () {
console.log(`clubServer.js app listening on IPv4: ${host}:${port}`);
});