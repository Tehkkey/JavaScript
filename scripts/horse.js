/*
 *  Name: Susan Uland
 *  Date: January 2019
 *  Purpose: This script will display the correct photo of the horse breed
 *  entered into a input box and display the breed's name in the header element.
 *  If an unknown breed is entered, an alert dialog box is displayed
 *
 */
 "use-strict";  // ensure variables are declared before used, etc
 
 document.getElementById("btn-horse").onclick = findPic;
 
 function findPic()
 {
        let name = document.getElementById("txt-breed").value;  // retrieve the horse breed value from the text box
        let pic = document.getElementById("horseimg"); // get image element
        let header = document.getElementById("label"); // get header element
        
        // if the breed converted to uppercase equals QUARTER
        if(name.toUpperCase() === 'QUARTER')
        {          
            pic.src = "images/quarter.jpg"; // set image
            pic.alt = "Quarter Horse"; // set alt attribute for image
            header.innerHTML = "Quarter Horse"; // set horse bread in header text
        }
        else if (name.toUpperCase() === 'ARABIAN') 
        {
            pic.src = "images/arabian.jpg";
            pic.alt = "Arabian Horse";
            header.innerHTML = "Arabian Horse";
        }
        else if (name.toUpperCase() === 'FREESIAN')
        {
            pic.src = "images/freesian.jpg";
            pic.alt = "Freesian Horse";
            header.innerHTML = "Freesian Horse";
        }
        else
        {
            alert("Unknown Breed entered");
         
        }   
    
 }  
 