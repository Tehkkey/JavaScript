/*
 *  Name: Kyle Sanchez
 *  Date: October 7, 2019
 *  Purpose: Demo of loop structures
 *
 */
// create a list/array to hold our random numbers
let numbers = [];
let text = "";

//generate 50 random numbers and place them in this array
for(var i=0; i<50; i++)
{
    numbers[i]= Math.floor(Math.random() *6)+1;
    text = text + numbers[i] +"&nbsp&nbsp&nbsp&nbsp";
}

// place the numbers in the H1 element with the id randomNums
let h1Tag = document.getElementById('randomNums');
// inner HTML or textContent(faster)
h1Tag.innerHTML = text;

//generate an index number 1-6
let index = Math.floor(Math.random()*6 +1);
console.log(index);
document.getElementById('die').src = "images/die" + index +".png";
document.getElementById('die').alt = "Die Roll " + index;