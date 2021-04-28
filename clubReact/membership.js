import React from "react";
import ReactDOM from "react-dom";

class Membership extends React.Component {
  render() {
    return (
       <main>
		<header>
			<h1>Sign Up</h1>
		</header>
		<form action="./membershipSignup" method="post" id="form1">
		<div class ="grid-container">
			<div class="item1"><label for="name">Enter your name: </label></div>
			<div class="item1"><input type="text" name="name" id="name" required></input></div>
			<div class="item1"><label for="email">&#9993; Enter your email: </label></div>
			<div class="item1"><input type="email" name="email" id="email" required></input></div>
			<div class="item1"><label for="password">Enter your password: </label></div>
			<div class="item1"><input type="password" name="password" id="password" required></input></div>
			<div class="item1"><label for="select">Choose your preferred game: </label></div>
			<div class="item1"><select name="game" id="game" required>
				<option value="fallout">Fallout 4</option>
				<option value="skyrim">Skyrim</option>
				<option value="cyberpunk">Cyberpunk 2077</option>
			<option value="witcher">Witcher 3</option>
			</select></div>
					
			<div class="item1"><input type="submit" value="Sign Up!"></input></div>
			</div>
		</form>
		</main>
    );
  }
}

export default Membership;