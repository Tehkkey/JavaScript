let btn = document.getElementById('btn');
btn.addEventListener('click', addFruit);


const items = document.getElementsByTagName('li');
    for(let i=0; i <items.length; i++)
    {
        items[i].addEventListener('click', highlight);
        items[i].addEventListener('dbclick', removeHighlight);
    }
function highlight()
{
    // this represents the list item you clicked
    this.className = "yummy";
    
    
}

function addFruit()
{
    //get the fruit out of the text input box assign to this variable
    let newFruit = document.getElementById('txtFruit').value;
    // create a new <li> element
    let newElement = document.createElement('li');
    //assign the highlight function to the new element's onclick event
    newElement.addEventListener('click', highlight);
    // assign fruit text the user entered
    newElement.textContent = newFruit;
    // get the ul fruit list and assign to a variable
    let list = document.getElementById('fruits');
    //append the li element to the end of the list
    list.appendChild(newElement);
    
}
function removeHighlight()
{
    this.className = '';
}