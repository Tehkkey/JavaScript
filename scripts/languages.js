/*
       Author:Kyle Sanchez
       Date:10/28/2019
       URL: 
       Purpose: Create a simple page that can store text input
       in an array and sort
*/


let myArray = ['Java', 'C', 'C++',
               'Python', 'C#', 'Visual',
               'Basic .NET', 'JavaScript', 'PHP'];


let sortAZ = document.getElementById("btn-sort");
let sortZA = document.getElementById("btn-reverse");
let unorderedList = document.getElementById("uList");

sortAZ.onclick = sortLanguages;
sortZA.onclick = reverseLanguages;

let stringItems = "";

function sortLanguages()
{
    
    myArray.sort();
    for (let item of myArray)
    {
        
        
        stringItems += "<li>" +item+"</li>";
        unorderedList.innerHTML = stringItems;
        console.log(stringItems);
        
        
        /*listItem = document.createElement('li');
        listItem.innerHTML = myArray[i];
        unorderedList.appendChild(listItem);*/   
        
    }
    //clear unordered list value
    unorderedList ="";
    
    
}

function reverseLanguages()
{
    myArray.sort();
    myArray.reverse();
    for (let i=0; i<myArray.length; i++)
    {
        stringItems += "<li>" +myArray[i]+"</li>";
        unorderedList.innerHTML = stringItems;
        console.log(stringItems);
        
        
    }
    //clear unordered list value
    unorderedList ="";
}