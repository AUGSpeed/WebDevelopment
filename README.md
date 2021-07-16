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

![3b](images/Capture3.PNG)

### (c)

![3c](images/Capture4.PNG)

## Question 4

### (a)

![4a](images/Capture5.PNG)

### (b)

https://www.drbsclasses.org/student13/node/
