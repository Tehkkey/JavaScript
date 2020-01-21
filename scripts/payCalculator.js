

let name = prompt("Hi. What's your name?", "name");
let hours = prompt("How many hours have you worked this week?");
hours = parseFloat(hours);
let payRate = prompt("What is your current Pay Rate?");
payRate = parseFloat(payRate);
let total = (hours * payRate);
let holiday = confirm("Did you work on a holiday?");
if(holiday == true){
    total += 50;
}
else {
    total += 0;
}

alert(name + " , you earned " + total+ ".");
