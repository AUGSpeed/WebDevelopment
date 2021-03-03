/* All your code here */

document.getElementById("SortedBy").appendChild(document.createTextNode("Increasing Date (start)"));
document.getElementById("NetId").appendChild(document.createTextNode("fr5826"));
events.sort(function(a, b){return a.start - b.start});

var table = document.getElementsByTagName("table");
var tableBody = table[0].getElementsByTagName("tbody");
var newR = document.createElement("tr"); 
var newC = document.createElement("td"); 
var newText = document.createTextNode(events[0].start); 

for (var i = 0; i <= events.length; i++)
{
newR = document.createElement("tr"); 
tableBody[0].appendChild(newR);
newC = document.createElement("td"); 
newText = document.createTextNode(events[i].start); 
newC.appendChild(newText); 
tableBody[0].appendChild(newC);

newText = document.createTextNode(events[i].location); 
newC = document.createElement("td"); 
newC.appendChild(newText); 
tableBody[0].appendChild(newC);

newText = document.createTextNode(events[i].board); 
newC = document.createElement("td"); 
newC.appendChild(newText); 
tableBody[0].appendChild(newC);

newText = document.createTextNode(events[i].distance); 
newC = document.createElement("td"); 
newC.appendChild(newText); 
tableBody[0].appendChild(newC);
}

