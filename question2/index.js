import React from 'react';
import ReactDOM from 'react-dom';
import Order from './order';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    /* You are allowed to add methods here */

	addOrder(newItem, newQuantity){
		this.state.orders.push({item: newItem, quantity: newQuantity})
		console.log(this.state.orders);
	}

    /* END AREA OF ADDED METHODS */

    render() {
		// I had to add this here, otherwise I got an error saying that addOrder was undefined at line 39.
		var addOrder = this.addOrder
		//
        let lastOrder = {};
        let item = "";
        let quantity = "";
        let numOrders = this.state.orders.length;
        if (numOrders > 0) {
            lastOrder = this.state.orders[numOrders-1];
            item = lastOrder.item;
            quantity = lastOrder.quantity;
        }
        return <div id="MainDiv"> 
            <h1> Language Store Orders </h1> 
            <Order 
                /* CAN ADD CODE HERE */
				addOrder = {addOrder.bind(this)}
                />
            <div>
                <h2>Order History</h2>
                <p>Number of Orders: {this.state.orders.length}</p>
                <h3>Most Recent Order</h3>
                <p>Item: {item}</p>
                <p>Quantity: {quantity}</p>
            </div>
            
            </div>;
    }
}


ReactDOM.render( < App / > , document.getElementById('root'));
