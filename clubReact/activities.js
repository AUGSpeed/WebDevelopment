import React from "react";
import ReactDOM from "react-dom";
//In no way did you inform us how to access the event data that is passed here from index.js, so I did it the cheaty way.
import events from "./eventData.json"

console.log(events);

let rows = events.map(function(u){
  return <tr> <td>{u.name}</td> <td>{u.dates}</td></tr>;
});

class Activities extends React.Component {
  render() {
    return (
       <main>
			
			<header>
				<h1>Activities</h1>
			</header>
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

export default Activities;