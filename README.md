**Michael LaRussa**

# Homework #3 Solution

# Question 1

## (a)

![1a](images/Capture.PNG)

## (b)

![1b](images/Capture2.PNG)

## (c)

I accidentally already did this in the last assignment, but I will put the relevant code here still.

```css

nav li {
	list-style-type: none;
	display: table;
}

nav li:hover {
	background-color: LightCoral;
}

nav li:active {
	background-color: Coral;
}

```

# Question 2

## (a)

## (b)

```html

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Time</th>
			<th>Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td>How to mod: Fallout 4</td>
			<td>Saturdays @ 10 AM PST</td>
			<td>A simple seminar hosted by F4EE author Michael "AUGSpeed" LaRussa. This is for anyone who may want to get into Fallout 4 modding, and want to ask questions or just hangout.</td>
		</tr>
		<tr>
			<td>Modding Ethics Discussion</td>
			<td>First Wednesday of every month</td>
			<td>Copyright, intellectual property and modding. What is it all about? Come talk with us and learn and discuss about ethical dilemmas within the modding community.</td>
		</tr>
		<tr>
			<td>Happy Hour</td>
			<td>Friday Nights</td>
			<td>The whole club is invited to join us in a random game for the night! Suggestions are very welcome, and we will all call using Discord.</td>
		</tr>
	</tbody>
</table>

```

## (c)

![2c](images/Capture3.PNG)

```css

table,td,th {
	border: 3px solid;
	border-color: Blue;
	border-collapse: collapse;
}

table td,th{
	padding: 6px;
}

table td {
	background-color: LightGrey;
}

table th {
	background-color: Grey;
}

```

# Question 3

## (a)

![3a](images/Capture4.PNG)

## (b)

http://csweb01.csueastbay.edu/~fr5826/clubProject/index.html

# Question 4

## (a)

(i) This splits our sentence string into multiple other strings and puts it into an array.

(ii) This adds a string to the end of our array

(iii) This prints all of the strings out as one string attached by underscores.

(iv) This locates galaxy's index in our array, returns that number and stores it in a variable called tempIndex.

(v) Yes, you did.

(vi) This returns the last array item, and also removes it from the array.

![4a](images/Capture5.PNG)

## (b)

(i) This function makes the string given all uppercase.

(ii) This map will loop through all of the elements in myArray2 and pass them through the 'upper' function.

(iii) Because the comparing here is based on unicode order, and uppercase and lowercase letters have different values, meaning if they were different cases, then the sorting would not be alphabetical as we see it.

(iv) The purpose is to sort every single item in the array using our function, so passing our function to the array's build in sort loop is essential.

## (c)

(i) We put a space in the name of the property, so we needed to save that name as a string value using bracket notation.

(ii) Yes, you can.

![4c](images/Capture6.PNG)


