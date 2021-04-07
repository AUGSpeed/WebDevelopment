// deployTest.js
const express = require('express');
const app = express();
let host = 'localhost';
const port = 3001; // !!! WARNING YOU MUST CONFIGURE THIS CORRECTLY WHEN WE DEPLOY !!!
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
app.use(express.static('public'))

let count = 0; // Visit count
let startDate = new Date(); // Server start Date time
let yourName = "Michael LaRussa";
let netId = "fr5826";

let info = {host: host, port: port, name: yourName}

app.get('/', function (req, res) {
    count++;
	let info = {host: host, port: port, name: yourName, count: count, netID: netId}
    res.render('home.njk', info);
});

app.get('/uptime', function(req, res){
    let curDate = new Date();
	let localDate = startDate.toLocaleString()
	let currentDate = curDate.toLocaleString()
	let info = {start: localDate, current: currentDate}
	res.render('uptime.njk', info);
})



app.listen(port, host, function () {
console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});