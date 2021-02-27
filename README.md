**Michael LaRussa**

**NetID: fr5826**

# Homework #4 Solution

# Question 1

## (a)

```javascript
		var LeastPop = document.getElementById("LeastPop");
		var LeastPopList = LeastPop.querySelector("ol");
		var statesSorted = states.sort(function(a, b){return b.population_rank - a.population_rank});
		
		var state1 = LeastPopList.appendChild(document.createElement("li"));
		var state2 = LeastPopList.appendChild(document.createElement("li"));
		var state3 = LeastPopList.appendChild(document.createElement("li"));
		var state4 = LeastPopList.appendChild(document.createElement("li"));
		var state5 = LeastPopList.appendChild(document.createElement("li"));
		
		state1.appendChild(document.createTextNode(statesSorted[0].state + ", Code:" + statesSorted[0].code + ", Population:" + statesSorted[0].population + ", Capital:" + statesSorted[0].capital_city));
		state2.appendChild(document.createTextNode(statesSorted[1].state + ", Code:" + statesSorted[1].code + ", Population:" + statesSorted[1].population + ", Capital:" + statesSorted[1].capital_city));
		state3.appendChild(document.createTextNode(statesSorted[2].state + ", Code:" + statesSorted[2].code + ", Population:" + statesSorted[2].population + ", Capital:" + statesSorted[2].capital_city));
		state4.appendChild(document.createTextNode(statesSorted[3].state + ", Code:" + statesSorted[3].code + ", Population:" + statesSorted[3].population + ", Capital:" + statesSorted[3].capital_city));
		state5.appendChild(document.createTextNode(statesSorted[4].state + ", Code:" + statesSorted[4].code + ", Population:" + statesSorted[4].population + ", Capital:" + statesSorted[4].capital_city));

```

## (b)

```javascript
		for (var i = 0; i <= 49; i++)
		{
			var New_Article = document.getElementById("AbbrGame").querySelector("div").appendChild(document.createElement("article"));
			New_Article.appendChild(document.createElement("p").appendChild(document.createTextNode(states[i].state)));
			var newInput = document.createElement("input");
			newInput.setAttribute("id", states[i].code);
			newInput.setAttribute("type", "text");
			New_Article.appendChild(newInput);
			var newP = document.createElement("p");
			var newSmall = document.createElement("small");
			newSmall.appendChild(document.createTextNode("Hint"));
			newSmall.setAttribute("title", states[0].code);
			newP.appendChild(newSmall);
			New_Article.appendChild(newP)
		}
```

# Question 2

## (a)

## (b)

```html

		<nav>
		
			<div class="flex-container">
				<div class = "active"><a href="index.html">Home</a></div>
				<div><a href="login.html">Login</a></div>
				<div><a href="activities.html">Activities</a></div>
				<div><a href="signUp.html">Sign Up</a></div>
			</div>
		
		</nav>

```

```css
nav {
	position: fixed;
	top: 0px;
	width: 89.25%;
	background-color: Linen;
	border-style: solid;
	border-width: 7px;
	border-color: LightGoldenRodYellow;
}

nav .flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

nav .flex-container > div {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  margin-bottom: 10px;
}


nav .flex-container > div:hover {
	background-color: LightCoral;
}

nav .flex-container > div:active {
	background-color: Coral;
}
```

# Question 3

## (a)

I would use Pixels, because they are static across all platforms.

## (b)

```css
main .flex-container {
	justify-content: center;
	padding: 10px;
}
```

# Question 4

## (a)

```css
	form .grid-container {
	 display: grid;
	grid-template-columns: 150px 100px;
	grid-gap: 10px;
	padding: 10px;
	justify-content: center;
}
```

## (b)

```html

<form action="" method="get" id="form1">
	<div class ="grid-container">
		<div class="item1"><label for="name">Enter your name: </label></div>
		<div class="item1"><input type="text" name="name" id="name" required></div>
		<div class="item1"><label for="email">&#9993; Enter your email: </label></div>
		<div class="item1"><input type="email" name="email" id="email" required></div>
		<div class="item1"><label for="password">Enter your password: </label></div>
		<div class="item1"><input type="password" name="password" id="password" minlength=7 required></div>
		<div class="item1"><label for="select">Choose your preferred game: </label></div>
		<div class="item1"><select name="game" id="game" required>
			<option value="fallout">Fallout 4</option>
			<option value="skyrim">Skyrim</option>
			<option value="cyberpunk">Cyberpunk 2077</option>
			<option value="witcher">Witcher 3</option>
		</select></div>
					
		<div class="item1"><input type="submit" value="Sign Up!"></div>
	</div>
</form>

```

```css
form .grid-container {
	display: grid;
	grid-template-columns: 175px auto;
	grid-gap: 10px;
	padding: 10px;
	justify-content: center;
	text-align: right;
	}
```

## (c)

http://csweb01.csueastbay.edu/~fr5826/clubProject/index.html


