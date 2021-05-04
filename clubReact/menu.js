import React from "react";
import ReactDOM from "react-dom";

class Menu extends React.Component {

  render() {
	var handleToUpdate  =   this.props.handleToUpdate;
	if (this.props.role == "guest")
	{
		return (
      <nav>
		
			<div class="flex-container">
				<div class = "active"><a onClick={() => handleToUpdate("home")} >Home</a></div>
				<div><a onClick={() => handleToUpdate("activities")} >Activities</a></div>
				<div><a href="">Login</a></div>
				<div><a onClick={() => handleToUpdate("membership")} >Sign Up</a></div>
			</div>
			
			
		
		</nav>
		);
	}
	if (this.props.role == "user")
	{
		return (
      <nav>
		
			<div class="flex-container">
				<div class = "active"><a onClick={() => handleToUpdate("home")} >Home</a></div>
				<div><a onClick={() => handleToUpdate("activities")} >Activities</a></div>
				<div><a href="">Logout</a></div>
				<div><a onClick={() => handleToUpdate("adminActivity")}>Add Activity</a></div>
			</div>
			
			
		
		</nav>
		);
	}
	if (this.props.role == "admin")
	{
		return (
      <nav>
		
			<div class="flex-container">
				<div class = "active"><a onClick={() => handleToUpdate("home")} >Home</a></div>
				<div><a onClick={() => handleToUpdate("activities")} >Activities</a></div>
				<div><a href="">Logout</a></div>
				<div><a onClick={() => handleToUpdate("adminActivity")}>Add Activity</a></div>
				<div><a href="">Member List</a></div>
			</div>
			
			
		
		</nav>
		);
	}
    
  }
}

export default Menu;