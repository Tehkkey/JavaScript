        //TODO: Set up a variable to hold the order total
var orderTotal = 0.00;

 // TODO: Add EventListeners to each image element
document.getElementById('img1').addEventListener('mouseover', addBorder);
document.getElementById('img2').addEventListener('mouseover', addBorder);
document.getElementById('img3').addEventListener('mouseover', addBorder);
document.getElementById('img4').addEventListener('mouseover', addBorder);
document.getElementById('img5').addEventListener('mouseover', addBorder);
document.getElementById('img6').addEventListener('mouseover', addBorder);
document.getElementById('img7').addEventListener('mouseover', addBorder);
document.getElementById('img8').addEventListener('mouseover', addBorder);
document.getElementById('img9').addEventListener('mouseover', addBorder);
//mouse out events
document.getElementById('img1').addEventListener('mouseout', removeBorder);
document.getElementById('img2').addEventListener('mouseout', removeBorder);
document.getElementById('img3').addEventListener('mouseout', removeBorder);
document.getElementById('img4').addEventListener('mouseout', removeBorder);
document.getElementById('img5').addEventListener('mouseout', removeBorder);
document.getElementById('img6').addEventListener('mouseout', removeBorder);
document.getElementById('img7').addEventListener('mouseout', removeBorder);
document.getElementById('img8').addEventListener('mouseout', removeBorder);
document.getElementById('img9').addEventListener('mouseout', removeBorder);
// place order event listeners
document.getElementById('img1').addEventListener('click', placeOrder);
document.getElementById('img2').addEventListener('click', placeOrder);
document.getElementById('img3').addEventListener('click', placeOrder);
document.getElementById('img4').addEventListener('click', placeOrder);
document.getElementById('img5').addEventListener('click', placeOrder);
document.getElementById('img6').addEventListener('click', placeOrder);
document.getElementById('img7').addEventListener('click', placeOrder);
document.getElementById('img8').addEventListener('click', placeOrder);
document.getElementById('img9').addEventListener('click', placeOrder);

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
        //TODO: Create a list item from  cthe clicked image element and add it to the unordered list.
        //the total is also updated and displayed in the <h3> element.
        function placeOrder(e)
        {
            // text contains the alt text for  the image that was clicked
            let text = e.target.alt;
            var node = document.createElement('LI');
            var textnode = document.createTextNode(text);
                node.appendChild(textnode);
                document.getElementById('orders').appendChild(node);
                orderTotal += 1.00;
                orderTotal.toFixed(2);
                
                document.getElementById('total').innerHTML='$ ' +orderTotal+'.00';
                // i realize that i didn't add the decimal places correctly, however,
                // i tried using .floor and .toFixed and even .toPrecision to add the extra decimals
                // none of those worked so i'd like to know why.
                
                
          
        }
