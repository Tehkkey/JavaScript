var animals = ['Dog', 'Elephant', 'Fish', 'Frog', 'Lion', 'Rabbit', 'Tiger'];
var img = document.getElementsByTagName('img');
var animalHeading = document.getElementById('animal');
var losses = 0;
var wins = 0;
var rand = animals[Math.floor(Math.random() * animals.length)];
let text = '';

for(images of img)
{
        images.addEventListener('mouseover', addBorder);
        images.addEventListener('mouseout', removeBorder);
        images.addEventListener('click', matchName);

       
}

  
//alters the elements class name to add the CSS border styling
        function addBorder()
        {
            this.className = 'border';
          
        }
        //alters the elements class name to remove the CSS border styling.
        function removeBorder()
        {
            this.className = 'noBorder';
        }
        
// generate random number to use for index of animals array


    let node = document.createElement('H4');
    let textnode = document.createTextNode(text);
    node.appendChild(textnode);
    animalHeading.appendChild(node);
    animalHeading.innerHTML= rand;
    console.log(rand);





// function to run the name match game based on click event loop
function matchName(e)
{
    
   
    let win = "Good Job, Nice Match";
    let lose = "Nope, Try Again!";
    
        let altText = e.target.alt;
        
        
        if(altText == rand)
        {
            wins++;
            document.getElementById('status').innerHTML = win;
            document.getElementById('wins').innerHTML = 'Total Matches: '+ wins;
            
        }else
        {
            losses ++;
            document.getElementById('status').innerHTML = lose;
            document.getElementById('losses').innerHTML = 'Total Misses: '+losses;

        }
        
       
        
}