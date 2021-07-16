**Michael LaRussa**

# Homework 9

## Question 1


### (a)


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

### (c)

![1c](images/Capture.PNG)

### (d)

```nunjuks
{% extends "clubBase.njk" %}

{% block metaStuff %}
        <title>Login</title>
{% endblock %}
    
{% block main %}
    <header id="top">
		<h1>Login</h1>
	</header>
	<img src="images/Red_Rocket.jpg" alt="Red Rocket Truck Stop" width="426" height="234">
				
	<form action="" method="get" id="form1">
		<div class ="grid-container">
			<div class="item1"><label for="email">&#9993; Enter your email: </label></div>
			<div class="item2"><input type="email" name="email" id="email" required></div>
			<div class="item3"><label for="password">Enter your password: </label></div>
			<div class="item4"><input type="password" name="password" id="password" required></div>
			<div class="item5"><input type="submit" value="Login"></div>
		</div>
	</form>
{% endblock %}
```

### (e)

### (f)

```HTML
<nav>
			
			<div class="flex-container">
				<div><a href="/">Home</a></div>
				<div><a href="/login">Login</a></div>
				<div><a href="/activities">Activities</a></div>
				<div><a href="/membership">Membership</a></div>
			</div>
		
		</nav>
```

## Question 2

### (a)



### (b)

```HTML
<header>
	<h1>Activities</h1>
</header>
<table>
	<tr>
		<th>Name</th>
		<th>Dates</th>
	</tr>
	<tr>
		<td>{{ activities.events[0].name }}</td>
		<td>{{ activities.events[0].dates }}</td>
	</tr>
	<tr>
		<td>{{ activities.events[1].name }}</td>
		<td>{{ activities.events[1].dates }}</td>
	</tr>
	<tr>
		<td>{{ activities.events[2].name }}</td>
		<td>{{ activities.events[2].dates }}</td>
	</tr>
</table>
```

### (c)

![2c](images/Capture1.PNG)

## Question 3

### (a)

![3a](images/Capture2.PNG)

### (b)

![3b](images/Capture4.PNG)

### (c)

![3c](images/Capture5.PNG)

![3c](images/Capture6.PNG)

## Question 4

### (a)

### (b)

### (c)

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {% block metaStuff %}
        <title>California Video Game Modders Club</title>
        {% endblock %}
        <link href="css/club.css" rel="stylesheet">
    </head>
    <body>
    <main>
        {% block main %}
		<p>This server has been visited {{count}} times!</p>
		{% endblock %}
    </main>
    <footer>
        <p>&copy; 2021 Michael LaRussa</p>
    </footer>
    </body>
</html>
```

### (d)

```nunjuks
{% extends "base.njk" %}

{% block metaStuff %}
        <title>Homepage</title>
{% endblock %}
    
{% block main %}
    <h1>Hello from {{name}}</h1>
    <h2>NetID: {{netID}}</h2>
    <p>This server has been visited {{count}} times!</p>
{% endblock %}
```

```nunjuks
{% extends "base.njk" %}

{% block metaStuff %}
        <title>Server Uptime</title>
{% endblock %}
    
{% block main %}
    <h1>Server Uptime</h1>
    <h2>Server Started: {{start}}</h2>
    <p>Current Date: {{current}}</p>
{% endblock %}
```

### (e)

```javascript
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
```

![3c](images/Capture7.PNG)

### (f)

![3c](images/Capture8.PNG)
