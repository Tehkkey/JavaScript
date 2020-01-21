/*
       Author:Kyle Sanchez
       Date:10/28/2019
       URL: 
       Purpose: Create a simple page that can store text input
       in an array and sort the contents
*/



const addItemValue = document.getElementById("item");
const btnAdd = document.getElementById("btnAdd");
const listItems = document.getElementById("list");

btnAdd.onclick = addItem;

let toDo = [ ];


    

function addItem()
{
    let newItem = addItemValue.value;
    toDo.push(newItem);
    toDo.sort();
    
    let todos = "";

    for(let item of toDo)
    {
    todos += "<li>" +item+"</li>"; 
    }
    console.log(toDo);
    console.log(todos);
    
    listItems.innerHTML = todos;
    //clear the text
    addItemValue.value ="";
    
    /*for(let duplicate of toDo)
    {
        if(newItem === duplicate)
        
    }*/
    
}