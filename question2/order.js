import React from "react";
import ReactDOM from "react-dom";



class Order extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			item: '',
			quantity: ''
		};
		this.handleItemChange = this.handleItemChange.bind(this);
		this.handleQuantityChange = this.handleQuantityChange.bind(this);
	}
	
	handleItemChange(event) {
    this.setState({item: event.target.value});
	}
	
	handleQuantityChange(event) {
    this.setState({quantity: event.target.value});
	}

  render() {
	var addOrder  =   this.props.addOrder;
    return (
		<div>
			<h2>
			Order Form
			</h2>
			<div id="OrderForm">
				<label for="select">Choose your item: </label>
				<select value={this.state.item} onChange={this.handleItemChange}>
					<option value="JavaScript">JavaScript</option>
					<option value="Python">Python</option>
					<option value="Rust">Rust</option>
					<option value="Go">Go</option>
				</select>
				<label for="input">Enter Quantity: </label>
				<input type="text" value={this.state.quantity} onChange={this.handleQuantityChange}></input>
				<input type="submit" value="Send Order" onClick = { () => addOrder(this.state.item, this.state.quantity)}></input>
			</div>
		</div>
    );
  }
}

export default Order;
