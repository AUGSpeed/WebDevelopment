import React from "react";
import ReactDOM from "react-dom";



class StateViewer extends React.Component {

	

  render() {
	  let foo = this.props.filter;
		console.log(foo);
	let states = this.props.states.map(function(u){
		if (foo == true)
		{
			if (u.population <= 2000000)
			{
			return <details>
				<summary class="StateViewer">
					{u.state}
				</summary>
				<label>
					Nickname:
				</label>
				<p>
					{u.nickname}
				</p>
				<label>
					Admission Date:
				</label>
				<p>
					{u.admission_date}
				</p>
				</details>;
			}
		}
		else
		{
			return <details>
				<summary>
					{u.state}
				</summary>
				<label>
					Nickname:
				</label>
				<p>
					{u.nickname}
				</p>
				<label>
					Admission Date:
				</label>
				<p>
					{u.admission_date}
				</p>
				</details>;
		}
	});
    return (
       <section class="StateViewer">
			{states}
	   </section>
    );
  }
}

export default StateViewer;
