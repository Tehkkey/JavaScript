"use-strict";

//addEventListener to form for submit event
document.getElementById("pizza").addEventListener("submit", validate);
//document.getElementById("pizza").onSubmit = validate;
function validate(e)
{
    //validate first name
    let validFirst = validateInputField('fname', 'error-fname');
    // validate last name
    let validLast = validateInputField('lName', 'error-lName');
    //validate pizza size
    let validSize = validateSelectList('size', 'error-size');
    //validate pizza delievery method
    let validDelivery = validateRadioButtons('deliver_method', 'error-delivery');
    //validate the checkbox
    let validTerms = validateCheckBox('terms', 'error-terms');
    
    let validInput = validFirst && validLast && validSize && validDelivery && validTerms;
    
    if(validInput===false)
    {
      e.preventDefault(); 
    } 
    
    
    return validInput; // true if everything is valid, false otherwise
    
}


function validateInputField(id, errorId) {
	    // Get the value in the field and error field 
		let txtField = document.getElementById(id).value;
		let errField = document.getElementById(errorId);

		// Validate text field
		if(txtField === "") {		
            errField.className = 'error';	
            return false;	
        }
	 
       errField.className = 'hidden';
       return true;
}

function validateCheckBox(id, errorId) {
       // Get the value in the checkbox and the error field
       let checkBox = document.getElementById(id).checked;
       let errField = document.getElementById(errorId);
    
       if(checkBox === false) {
          errField.className = 'error';
          return false;
       }
       
       errField.className = 'hidden';
       return true;
}

function validateRadioButtons(id, errorId) {
    // Get all of the radio buttons and the error field
    let buttons = document.getElementsByName(id);
    let errField = document.getElementById(errorId);
    
    // Loop through the array
    let count=0; // keeps count of checked radio buttons
    for(let i = 0; i < buttons.length; i++) {
        // if button is checked, hide error & increment count
        if (buttons[i].checked === true) {
           errField.className = 'hidden';
           count++;
        }
    }
    
    // If count is zero, no buttons were checked
    if (count === 0) {
        errField.className = 'error';
        return false;
    }
    
    return true;

}

function validateSelectList(id, errorId) {
    // get selected index and the error field
    let index = document.getElementById(id).selectedIndex;
    let errField = document.getElementById(errorId);
    
    // if selected index is 0, no item selected
    if (index === 0) {
        errField.className = 'error';
        return false;
    }
    errField.className = 'hidden';
    return true;
}