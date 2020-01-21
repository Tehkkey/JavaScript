 /*
 *  Name: Kyle Sanchez
 *  Date: October 2019
 *  Purpose: This script will display the correct photo of the horse breed
 *  entered into a input box and display the breed's name in the header element.
 *  If an unknown breed is entered, an alert dialog box is displayed
 *
 */

let btnRand = document.getElementById('petBtn');
			btnRand.onclick = pickPet;

//declaring all my variables outside the function because
// this is a small enough script to not worry much about global scope


function pickPet()
{
    const ageInput = document.getElementById("age").value;
    const genderInput = document.getElementById("gender").value;
    const pic = document.getElementById("pickPet");
    const header = document.getElementById("label");
      switch(true)
      {
        case (ageInput < 10):
            if(genderInput.toUpperCase() =="M")
            {
                pic.src = 'images/goldfish.jpg';
                pic.alt = "Goldfish";
                header.innerHTML = "Goldfish";
            }
            else if(genderInput.toUpperCase() =="F")
            {
                pic.src = 'images/python.jpg';
                pic.alt = "Python";
                header.innerHTML = "Python";
            }
            break;
        case (ageInput >=10 && ageInput < 30):
            if(genderInput.toUpperCase() =="M")
            {
                pic.src = 'images/iguana.jpg';
                pic.alt = "iguana";
                header.innerHTML = "Iguana";
            }
            else if(genderInput.toUpperCase() =="F")
            {
                pic.src = 'images/cat.jpg';
                pic.alt = "Cat";
                header.innerHTML = "Cat";
            }
            break;
        case (ageInput >= 30):
            if(genderInput.toUpperCase() =="M")
            {
                pic.src = 'images/dog.jpg';
                pic.alt = "dog";
                header.innerHTML = "Dog";
            }
            else if(genderInput.toUpperCase() =="F")
            {
                pic.src = 'images/horse.jpg';
                pic.alt = "Horse";
                header.innerHTML = "Horse";
            }
            break;
       
      }
}

