//Function declarations
// initializing by default with parameters
function sumUp(num1=2, num2=3)
{
    let total= num1+num2;
    return total;
}



// Function Expressions
const totalUp = function(num1=5, num2=8)
{
    let total = num1+num2;
    return total;
};



// IIFEs Immediately invoked function no need to call
//This type of function will call itself immediately
// called anonymous function
(function (num1,num2)
{
    let total = num1 +num2;
    console.log("IFFE"+total);
})(5,6);