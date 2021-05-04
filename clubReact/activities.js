import React from "react";
import ReactDOM from "react-dom";



class Activities extends React.Component {

	

  render() {
	  let rows = this.props.events.map(function(u){
	return <tr> <td>{u.name}</td> <td>{u.dates}</td></tr>;
	});
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