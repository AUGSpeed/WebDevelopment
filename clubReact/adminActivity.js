import React from "react";
import ReactDOM from "react-dom";


class AdminActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nameValue: '',
			dateValue: ''
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
	}
	
	handleNameChange(event) {
    this.setState({nameValue: event.target.value});
	}
	
	handleDateChange(event) {
    this.setState({dateValue: event.target.value});
	}
	
  render() {
	var addActivity  =   this.props.addActivity;
	//addActivity("This is a new Name", "These are New Dates");
	 let rows = this.props.events[0].map(function(u){
	return <tr> <td>{u.name}</td> <td>{u.dates}</td></tr>;
	});
	//this.props.events.events.push({name:"new Activity", dates: "The Whole Month of May"});
	//console.log(this.props.events.events);
    return (
       <main>
			
			<header>
				<h1>Activities</h1>
			</header>
			<div class ="grid-container">
				<div class="item1"><label for="name">Name of Activity: </label></div>
				<div class="item1"><input type="text" name="name" id="name" required value={this.state.nameValue} onChange={this.handleNameChange}></input></div>
				<div class="item1"><label for="dates">Dates of Activity: </label></div>
				<div class="item1"><input type="dates" name="dates" id="dates" required value={this.state.dateValue} onChange={this.handleDateChange}></input></div>
				<div class="item1"><input type="submit" value="Add Activity" onClick = {() => addActivity(this.state.nameValue, this.state.dateValue)}></input></div>
			</div>
			<table>
			
				<tr>
					<th>Name</th>
					<th>Dates</th>
				</tr>
				
				{rows}
		
			</table>

		</main>
      
    );
  }
}

export default AdminActivity;