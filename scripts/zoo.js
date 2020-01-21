/*
 *  Name: Kyle Sanchez
 *  Date: October 7, 2019
 *  Purpose: Demo of Decision structures
 *
 */
let welcome = alert("Hi. Welcome to the zoo");
let age = prompt("Enter your age to determine the price of admission.");
switch (true)
{
     case age <= 12:
            document.write("<h2>Child admission is free</h2>");
        break;
    case age <= 19 && age >=13:
            document.write("<h2>Student admission is $6.00</h2>");
        break;
    case age <= 60 && age >= 20:
            document.write("<h2>Adult admission is $7.00</h2>");
        break;
    case age >= 60:
            document.write("<h2>Senior admission is $5.00</h2>");
        break;
    default:
        document.write("<h2>Error, unknown age </h2>");
}


