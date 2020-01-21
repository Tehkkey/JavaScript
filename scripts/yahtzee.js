/*
       Author:Kyle Sanchez
       Date:10/30/2019
       URL: 
       Purpose: Creating a function to play the yahtzee game
*/

//get value of button
let btnPlay = document.getElementById("btnPlay");
btnPlay.onclick = play;

//create holder array for roll numbers
let rolls = [];
let text = "";
    
let die0 = document.getElementById("die0");
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let die3 = document.getElementById("die3");
let die4 = document.getElementById("die4");

//create an array of dieimages
let dies = [die0,die1,die2,die3,die4];


//this function activates on btnclick
function play()
{
    let results = document.getElementById("results");
    let yahtzee = "You won, Yahtzee!!! Dice: "+rolls;
    let lose = "You lost, Try Again! Dice: " +rolls;
    
    for(var i=0; i<5; i++)
    {
        rolls[i] = Math.floor((Math.random()*5)+1);
        text = text + rolls[i];
        
    }
    
    for (let equal of rolls)
    {
        if(equal+1 == equal)
        {
            results.innerHTML = yahtzee;
        }
        else if(equal+1 !== equal )
        {
            results.innerHTML = lose;
        }
    }
    console.log(rolls);
    
    //tried to make this work lol
    //displayDieImages(rolls);
}

//this function is an attempt to change die images to match with array index numbers
function displayDieImages(rolls)
{
    switch(rolls){
        case rolls[0] = 1:
                die0.innerHTML = die0;
                break;
            case rolls[0] = 2:
                die1.innerHTML = die1;
                break;
            case rolls[0] = 3:
                die2.innerHTML = die2;
                break;
            case rolls[0] = 4:
                die3.innerHTML = die3;
                break;
            case rolls[0] = 5:
                die4.innerHTML = die4;
                break;
                
            
    }
    
}