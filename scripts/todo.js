/**
 *This script manages an unordered bulleted list of to do item by using
 *an array to store tasks(array.push), sort tasks(array.sort), and to check for duplicate tasks(array.include).
 */
            
"use-strict";
// when button is clicked, call addItems() function
// document.getElementById("btn").onclick = addItems;
// replace the .onclick method
document.getElementById("btn").addEventListener('click', addItems);

//add the ability to read the list items in the web page instead of wiping the
// page contents
window.addEventListener('load', setupArray);

function setupArray()
{
    // search through the List items
    const listItems = document.getElementsByTagName('li');
    for(let i=0; i< listItems.length; i++)
    {
        myArray.push(listItems[i].textContent);
    }
    myArray.sort();
}

// declare an empty array
let myArray = [];

// use constants for HTML elements since they are accessed a lot 
const txtBox = document.getElementById("txt-box");
const ulList = document.getElementById("list");
            
/**
*This function adds the to do item to the array if it is not already in the array and if it does
*not contain an item that is not all spaces. It will alert the user if the item is already in the list
*and if there is nothing worthwhile (all spaces) to add.
*/


function addItems() {
    let item = txtBox.value;
    
    // trim off whitespaces
    item = item.trim();
    // if textbox is not empty
    if(item != "") {
         //
        if (!myArray.includes(item)){
            
        // get item from input box and add to array             
        myArray.push(item);
        
         // call display Items             
        displayItems(item);
                  
        } else {
            alert(item+" already in to do list");
        }

    } else {
        alert("No do to items to add");
    }
    
     // clear input box
    txtBox.value="";
}
/* // old function way to add to a list            
function displayItems() {
    
        // sort Array
        myArray.sort();
        
        // create an empty string
        let contents="";
        
        // take all elements from the array
        // and concatenate them together within
        // <li> tags
        
        for(let i = 0; i < myArray.length; i++) {
            contents += "<li>"+myArray[i] +"</li>";
        }
        
        // place the string of list items in the innerHTML of the ul tag
        ulList.innerHTML = contents;
                
}*/ // new function way to add to list with append child
function displayItems(item)
{
    
    
    // create DOM node li
    let listNode = document.createElement('li');
    // update the text of the DOM node
    listNode.textContent = item;
    
    ulList.appendChild(listNode);
    
    
}