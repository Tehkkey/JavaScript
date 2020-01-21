// get access to the button using const
const btnClear= document.getElementById("btnClear");
//call a disableElement function when the button is clicked
btnClear.onclick = disableElement;

//get access to the input box using const

const txtInput = document.getElementById("txtInput");

function disableElement()
{
    // clear the textInput field
    txtInput.value = "";
    // disable the txtInput
    txtInput.disabled = true;
    
    // change the text on the button to don't click me
    btnClear.innerHTML = "Don't click me!";
    
    //disable the button
    btnClear.disabled = true;
}