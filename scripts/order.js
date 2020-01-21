/*
 *  Name: Kyle Sanchez
 *  Date: October 9, 2019
 *  Purpose: Demo of Decision structures
 *
 */

let name = prompt("Hi. What is your name for the order?");
let manyCups = prompt("How many cups of tea would you like?");
let biscotti = confirm("Would you like to add a Biscotti to your tea?");
let total = (3.50*manyCups)*1.09;
if(biscotti == true){
    total+= 2;
}
let totalCut = total.toFixed(2);
document.write("<h2>" +name+", your total for "+manyCups+
               " cups of tea is $"+totalCut);
