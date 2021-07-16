**Michael LaRussa**

# Homework 12

## Question 1


### (a)

### (b)

![1b](images/Capture.PNG)

```javascript
render() {
        let content = <Home />;
        // statements/logic to set the content variable based on state
		if (this.state.show == "activities")
		{
			content = <Activities />
		}
		else if (this.state.show == "membership")
		{
			content = <Membership />
		}
        return (
            <>
                <Menu/>
                {content}
            </>
        );
    }
```

## Question 2

### (a)

Guest:

Home, Activities, Membership, Login

Member:

Home, Activities, Manage Activities, Logout

Admin:

Home, Activities, Manage Activities, Membership, Members List, Logout

### (b)

![2b](images/Capture1.PNG)

![2b](images/Capture2.PNG)

## Question 3

### (a)

I needed to give the App a function that I could call to update the state, and then pass that function to the menu component when I call it.

```javascript
<Menu role={this.state.role} handleToUpdate = {handleToUpdate.bind(this)} />
```

### (b)

I gave all of the buttons onClick handlers, which call the function that can change the state, and pass the value of the desired state using it.

```javascript
<a onClick={() => handleToUpdate("home")} >Home</a>
```

## Question 4

### (a)

![2b](images/Capture3.PNG)

### (b)

![2b](images/Capture4.PNG)

### (c)

![2b](images/Capture5.PNG)

### (d)

```javascript
constructor(props) {
		super(props)
		this.state = {
			nameValue: '',
			dateValue: ''
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
```

### (e)

```javascript
<div class ="grid-container">
				<div class="item1"><label for="name">Name of Activity: </label></div>
				<div class="item1"><input type="text" name="name" id="name" required value={this.state.nameValue} onChange={this.handleNameChange}></input></div>
				<div class="item1"><label for="dates">Dates of Activity: </label></div>
				<div class="item1"><input type="dates" name="dates" id="dates" required value={this.state.dateValue} onChange={this.handleDateChange}></input></div>
				<div class="item1"><input type="submit" value="Add Activity" onClick = {() => addActivity(this.state.nameValue, this.state.dateValue)}></input></div>
			</div>
```

### (f)

```javascript
handleNameChange(event) {
    this.setState({nameValue: event.target.value});
	}
	
	handleDateChange(event) {
    this.setState({dateValue: event.target.value});
	}
	
	addActivity(newName, newDates){
		let arrayDates = [newDates];
		let newEvents = this.state.events[0];
		newEvents.push({name:newName, dates: newDates});
		activities = newEvents;
		this.setState({events: [newEvents]});
		console.log(this.state.events);
	}
```
