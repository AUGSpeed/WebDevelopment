// index.js file
import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json"
import Menu from "./menu"; // my new menu component in menu.js
import Home from "./home";
import Activities from "./activities";
import Membership from "./membership";
import AdminActivity from "./adminActivity";

var activities = events;

class App extends React.Component {
    constructor(props) {
        super(props);
        // Application state variables:
        // *role* is for RBAC == "role based access control"
        // we have "guest", "user", and "admin"
        //
        this.state = { role: "user", show: "home", events: [activities] }; 
		var handleToUpdate  = this.handleToUpdate.bind(this);
		
    }
	
	handleToUpdate(someArg){
            this.setState({show: someArg});
    }
	
	addActivity(newName, newDates){
		let arrayDates = [newDates];
		let newEvents = this.state.events[0];
		newEvents.push({name:newName, dates: newDates});
		activities = newEvents;
		this.setState({events: [newEvents]});
		console.log(this.state.events);
	}


    render() {
		var handleToUpdate  =   this.handleToUpdate;
		var addActivity = this.addActivity;
        let content = <Home />;
        // statements/logic to set the content variable based on state
		if (this.state.show == "activities")
		{
			content = <Activities events={events} />
		}
		else if (this.state.show == "membership")
		{
			content = <Membership />
		}
		else if (this.state.show == "adminActivity")
		{
			console.log(this.state.events);
			content = <AdminActivity events= {this.state.events} addActivity = {addActivity.bind(this)} />
		}
        return (
            <>
                <Menu role={this.state.role} handleToUpdate = {handleToUpdate.bind(this)} />
                {content}
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));