/* Your code here */
var button = document.getElementsByTagName("button");
var input = document.getElementsByTagName("input");

document.getElementById("Fun1").addEventListener("dblclick", function() {
	document.getElementById("Fun1").innerHTML = Math.round(12 * Math.random());
	input[0].setAttribute("class", "neutral");
	input[0].value = "";
	console.log("Doubleclicked");
});  

document.getElementById("Fun2").addEventListener("mouseleave", function() {
	document.getElementById("Fun2").innerHTML = Math.round(12 * Math.random());
	input[0].setAttribute("class", "neutral");
	input[0].value = "";
	console.log("Mouse left");
}); 



button[0].addEventListener("click", function() {
	if (input[0].value == document.getElementById("Fun2").innerHTML * document.getElementById("Fun1").innerHTML)
	{
		input[0].setAttribute("class", "happy");
		console.log("Yay!");
	}
	else
	{
		input[0].setAttribute("class", "sad");
		console.log("Try again!");
	}
	
});

// Random number generation: Math.round(12 * Math.random());