import React from "react";
import ReactDOM from "react-dom";

class Menu extends React.Component {
  render() {
    return (
      <nav>
		
			<div class="flex-container">
				<div class = "active"><a href="">Home</a></div>
				<div><a href="">Login</a></div>
				<div><a href="">Activities</a></div>
				<div><a href="">Sign Up</a></div>
			</div>
		
		</nav>
    );
  }
}

export default Menu;