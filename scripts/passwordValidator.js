'use-strict';

// add a keypress event handler to the input box
const results = document.getElementById('results');
const pwdText = document.getElementById("pwdText");

//const charText = document.getElementById('charText');
pwdText.addEventListener('change', validatePassword);
const replace = document.getElementById('replace');

// anonymous self invoking function
(function () {
        let password = pwdText.value;
        let replaceChar = replace.value;
        for(let i=0; i < password.length; i++)
        {
        let character = password.charAt(i);
        if(character == replaceChar)
        {
            character.replace(replaceChar, "*");
            console.log(character);
            
        }
    } 
})();

function validatePassword()
{
    let password = pwdText.value;
    if(password.length < 6)
    {
        results.innerHTML = ' Invalid length: '+password.length;
    }else if(password.indexOf(' ') !== -1) // a space is found
    {
        results.innerHTML = 'Invalid password: spaces found';
    }else if(containsSingleDigit(password) === false)
    {
        results.innerHTML = 'Invalid password: password must contain only one digit';
    } else
    {
        results.innerHTML = 'Valid password: huzzah!';
    }
    
        
    
}

/*
 *this function returns true if the password contains one and only one
 *digit, false otherwise
 */

function containsSingleDigit(password)
{
    // we will iterate through password and
    // if a character is a number, we will incremement a count
    let count=0;
    for(let i=0; i < password.length; i++)
    {
        let character = password.charAt(i);
        if(!isNaN(character))
        {
            console.log("isNAN"+character);
            count++;
        }
    }
    if (count ===1)
    {
        return true;
    }else {
        return false;
    }
}
function stringEvents(event)
{
    let password = pwdText.value;
    alert(password.length);
    
    password = password.toUpperCase();
    alert(password);
    
    password= password.toLowerCase();
    alert(password);
    
    let firstChar = password.charAt(0);
    let lastChar = password.charAt(password.length -1);
    alert("First:"+firstChar+" Last:"+lastChar);
    
    let firstOcc = password.indexOf("e");
    let lastOcc = password.lastIndexOf("e");
    alert("first:"+firstOcc+" last:"+lastOcc);
    
    password = password.replace('o', '*');
    alert(password);
    
}