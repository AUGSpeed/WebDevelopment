**Michael LaRussa**

# Homework 10

## Question 1


### (a)

```Javascript
const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 10;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

for (let i = 0; i < users.length; i++)
{
	let user = [];
	user[0] = users[i].firstName;
	user[1] = users[i].lastName;
	user[2] = users[i].email;
	user[3] = users[i].role;
	let salt = bcrypt.genSaltSync(nRounds); // New salt everytime!
	let passHash = bcrypt.hashSync(users[i].password, salt);
	user[4] = passHash
	hashedUsers[i] = user;
}	

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));
```


Users:
```
[
  [
    "Melia",
    "Barker",
    "tirrivees1820@outlook.com",
    "admin",
    "$2a$13$yhEaetG8oCgkIIpfPTrVIeBcMJlebUWUcjIKNc9QZPHrg/67VoNaW"
  ],
  [
    "Demetrice",
    "Parker",
    "chihuahua1899@gmail.com",
    "member",
    "$2a$13$egkOfTuVfcJf2oMIwIf3z.0.Ih.n9/JfxIWm1blAiVQhr/ZTA7bBS"
  ],
  [
    "Ligia",
    "Hudson",
    "umbrate1989@yahoo.com",
    "member",
    "$2a$13$ERsLx61OLAL8boNbKExKC.i7tKd4CH/jcUIfcyvJyqfLFmW.BzH4C"
  ],
  [
    "Maisha",
    "Hickman",
    "bibiri1807@yandex.com",
    "member",
    "$2a$13$vIsVkZVv3xTsCXdGPEovn.bomkXCbwE1len/K.ZFLPmfkc2trdRoe"
  ],
```

### (b)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {% block metaStuff %}
        <title>California Video Game Modders Club</title>
        {% endblock %}
        <link href="club.css" rel="stylesheet">
    </head>
    <body>
		<nav>
			
			<div class="flex-container">
				<div><a href="index.html">Home</a></div>
				<div><a href="login.html">Login</a></div>
				<div><a href="activities.html">Activities</a></div>
				<div><a href="signUp.html">Sign Up</a></div>
			</div>
		
		</nav>
    <main>
        {% block main %}{% endblock %}
    </main>
    <footer>
        <p>&copy; 2021 Michael LaRussa</p>
    </footer>
    </body>
</html>
```

![1b](images/Capture.PNG)

### (c)

```javascript
var temp = [];
	let salt = bcrypt.genSaltSync(nRounds); // New salt everytime!
	let passHash = bcrypt.hashSync(req.body.password, salt);
	temp.push(req.body.name, req.body.email, req.body.game, passHash);
	memberApplications.push(temp);
	console.log(memberApplications);
	let info = {name: temp[0], email: temp[1], game: temp[2]}
	res.render('thanks.njk', info);
```

![1c](images/Capture1.PNG)

## Question 2

### (a)

```HTML
<form action="./membershipLogin" method="post" id="form1">
		<div class ="grid-container">
			<div class="item1"><label for="email">&#9993; Enter your email: </label></div>
			<div class="item2"><input type="email" name="email" id="email" required></div>
			<div class="item3"><label for="password">Enter your password: </label></div>
			<div class="item4"><input type="password" name="password" id="password" required></div>
			<div class="item5"><input type="submit" value="Login"></div>
		</div>
```

### (b)

```Javascript
var temp = 0;
	for (let i = 0; i < users.length; i++)
	{
		if (req.body.email == users[i][2])
		{
			temp = i;
		}
	}
	let hash = users[temp][4]
	let verified = bcrypt.compareSync(req.body.password, hash);
	console.log(`Verified against hash: ${verified}`);
```

### (c)

![2c](images/Capture3.PNG)

### (d)

![2d](images/Capture4.PNG)

## Question 3

### (a)

![3a](images/Capture5.PNG)

### (b)

```Javascript
app.get('/submitActivity', function(req, res) {
	var temp = [];
	temp.push(req.query.name, req.query.dates);
	eventData.push(temp);
	console.log(eventData);
	if (eventData.length > 100) { // only keep the last 100 activities added
    eventData.shift(); // removes the first item
	}
	res.redirect('/activities');
})
```

## Question 4

### (a)

```javascript
var temp = 0;
	for (let i = 0; i < users.length; i++)
	{
		if (req.body.email == users[i][2])
		{
			temp = i;
		}
	}
	let hash = users[temp][4];
	let auser = users[temp];
	let verified = bcrypt.compareSync(req.body.password, hash);
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
		});
		res.render('welcome.njk', {user: auser});
	}
	else
	{
		res.render('forbidden.njk');
	}
```

### (b)

```javascript
app.get('/logout', function (req, res, next) {
  let options = req.session.cookie;
  req.session.destroy(function (err) {
    res.clearCookie(cookieName, options); // the cookie name and options
    res.render("goodbye.njk");
  })
});
```

### (c)

![4c](images/Capture6.PNG)

![4c](images/Capture7.PNG)

## Question 5

### (a)

It was here that I realized I did the creation of my clubUsersHash file wrong, and made it an array rather than an object, making it close to impossible to do this task. Everything else did work up until now, and I can't exactly go back through the assignment, so just trust me.

![5a](images/Capture8.PNG)

### (b)

![5b](images/Capture9.PNG)

### (c)

![5c](images/Capture10.PNG)

https://www.drbsclasses.org/student13/node/
