// deployTest.js
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
let host = '127.0.0.1';
const bcrypt = require('bcryptjs');
const users = require('./clubUsersHash.json');
let nRounds = 13;
const port = 3013; // !!! WARNING YOU MUST CONFIGURE THIS CORRECTLY WHEN WE DEPLOY !!!
const nunjucks = require('nunjucks');
var eventData = [];
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));

const session = require('express-session');
// change cookie name from default
const cookieName = "userid"; // Session ID cookie name, use this to delete cookies too.

// Create the session middleware and put it into general use
app.use(session({
  secret: 'website development CSUEB',
  resave: false,
  saveUninitialized: false,
  name: cookieName // Sets the name of the cookie used by the session middleware
}));

// This initializes session state
const setUpSessionMiddleware = function (req, res, next) {
  // We can attach any state/info we like to the session JS object
  // Below we add a user property.
  if (!req.session.user) { // Check for state or initialize it
    req.session.user = {loggedin: false};
  }
  next();
};

app.use(setUpSessionMiddleware); // Put it to use!

const checkLoggedInMiddleware = function (req, res, next) {
  if (!req.session.user.loggedin) {
    res.render("forbidden.njk");
  } else {
    next();
  }
};

const checkAdminMiddleware = function (req, res, next) {
  if (req.session.user.role != "admin") {
    res.render("forbidden.njk");
  } else {
    next();
  }
};

let count = 0; // Visit count
let startDate = new Date(); // Server start Date time
let yourName = "Michael LaRussa";
let netId = "fr5826";

let info = {host: host, port: port, name: yourName}

const data = require('./public/eventData.json');


var memberApplications = [];


app.get('/', function (req, res) {
    count++;
	let info = {host: host, port: port, name: yourName, count: count, netID: netId, }
    res.render('index.njk', {user: req.session.user});
});

app.get('/login', function(req, res){
    let info = {host: host, port: port, name: yourName, count: count, netID: netId, user: req.session.user}
	res.render('login.njk', info);
})

app.get('/membership', function(req, res){
    let info = {host: host, port: port, name: yourName, count: count, netID: netId, user: req.session.user}
	res.render('membership.njk', info);
})

app.get('/activities', function(req, res){
    let info = {activities: eventData, user: req.session.user}
	res.render('activities.njk', info);
})

app.post('/membershipSignup', function(req, res){
	var temp = [];
	let salt = bcrypt.genSaltSync(nRounds); // New salt everytime!
	let passHash = bcrypt.hashSync(req.body.password, salt);
	temp.push(req.body.name, req.body.email, req.body.game, passHash);
	memberApplications.push(temp);
	console.log(memberApplications);
	let info = {name: temp[0], email: temp[1], game: temp[2], user: req.session.user}
	res.render('thanks.njk', info);
})

app.get('/serverId', function(req, res) {
	res.json({
    "studentName": "Michael LaRussa",
    "netId": "fr5826",
    "message": "Mod all the things!"
});
})

app.post('/membershipLogin', function(req, res) {
	let email = req.body.email;
	let password = req.body.password;
	// Find user
	let auser = users.find(function (user) {
		return user.email === email
	});
	if (!auser) {// Not found
		res.render("loginError.njk");
		return;
	}
	let verified = bcrypt.compareSync(password, auser.passHash);
	console.log(`Verified against hash: ${verified}`);
	if(verified)
	{
		let oldInfo = req.session.user;
        req.session.regenerate(function (err) {
            if (err) {
                console.log(err);
            }
            req.session.user = Object.assign(oldInfo, auser, {
                loggedin: true
            });
			res.render('welcome.njk', {user: auser});
		});
	}
	else
	{
		res.render('error.njk', {user: req.session.user});
	}
})

app.get('/addActivity', checkLoggedInMiddleware, function(req, res) {
	res.render('addActivity.njk', {user: req.session.user});
})



app.get('/submitActivity', checkLoggedInMiddleware, function(req, res) {
	var temp = [];
	temp.push(req.query.name, req.query.dates);
	eventData.push(temp);
	console.log(eventData);
	if (eventData.length > 100) { // only keep the last 100 activities added
    eventData.shift(); // removes the first item
	}
	res.redirect('./activities', {user: req.session.user});
})

app.get('/logout', checkLoggedInMiddleware, function (req, res, next) {
  let options = req.session.cookie;
  req.session.destroy(function (err) {
    res.clearCookie(cookieName, options); // the cookie name and options
    res.render("goodbye.njk");
  })
});

app.get('/memberList', checkAdminMiddleware, function(req, res) {
	res.render("members.njk", {user: req.session.user});
})

app.listen(port, host, function () {
console.log(`clubServer.js app listening on IPv4: ${host}:${port}`);
});