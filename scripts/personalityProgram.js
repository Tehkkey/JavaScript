let type ="";
    do {
        type = parseFloat(prompt("To test your personality, please enter a number 1-3", "Red-1, Blue-2, Green-3"));
    }while (type==="" || type===null || type<1.0 || type>3.0 || isNaN(type));

switch (true)
{
    case type == 1:
            image = '<img src="images/cheerful.png"></img>';
            document.getElementById("output-txt").innerHTML = "You are cheerful";
        break;
    case type == 2:
            image = '<img src="images/relaxed.png"></img>';
            document.getElementById("output-txt").innerHTML = "You are relaxed";
        break;
    case type == 3:
           image = '<img src="images/fear.png"></img>';
           document.getElementById("output-txt").innerHTML = "You are frightful";
        break;
    default:
        image = '<img src="images/personality.jpg"></img>';
}
document.getElementById("output-image").innerHTML = image;




let btnRand = document.getElementById('btn');
			btnRand.onclick = randProfile;

function randProfile()
{
// create a variable to hold our random number
let numbers = Math.floor(Math.random()*5)+0;
let text = "";

//generate a random number

text = text + numbers +"&nbsp&nbsp&nbsp&nbsp";
console.log(numbers);

switch (true)
{
     case numbers == 0:
            image = '<img src="images/angry.png"></img>';
            document.getElementById("output-txt").innerHTML = "You are fiery";
        break;
    case numbers == 1:
            image = '<img src="images/cheerful.png"></img>';
            document.getElementById("output-txt").innerHTML = "You are cheerful";
        break;
    case numbers == 2:
            image = '<img src="images/relaxed.png"></img>';
            document.getElementById("output-txt").innerHTML = "You are relaxed";
        break;
    case numbers == 3:
           image = '<img src="images/fear.png"></img>';
           document.getElementById("output-txt").innerHTML = "You are frightful";
        break;
    case numbers == 4:
            image = '<img src="images/nature.png"></img>';
            document.getElementById("output-txt").innerHTML = "You like nature";
        break;
    case numbers == 5:
            image = '<img src="images/irritated.png"></img>';
            document.getElementById("output-txt").innerHTML = "You are irritable";
        break;
    default:
        image = '<img src="images/personality.jpg"></img>';
}
document.getElementById("output-image").innerHTML = image;
}