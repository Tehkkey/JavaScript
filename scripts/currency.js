"use-strict";

// caching the variables
const $output = $("#output");
const $dollar = $("#dollar");
const $convert = $('#convert');
const $countryDisplay = $("#country");

// add click event to the JQuery button objects
$convert.on('click', convertCurrency);
$countryDisplay.on('click', flagDisplay);

function convertCurrency()
{
    let dollarValue = $dollar.val();
    let countryValue = $countryDisplay.val();
    console.log(dollarValue);
    if(countryValue == "Canada"){
            let convertedDollar = dollarValue * 1.33;
            $output.text(convertedDollar+" Canadian Dollars or CAD");
         }
        else if (countryValue == "Japan"){
            let convertedDollar = dollarValue * 109.54;
            $output.text(convertedDollar+" Japanese yen or YEN");
        }
        else{
           let convertedDollar = dollarValue * 0.91;
            $output.text(convertedDollar+" Euro");
        }
    
    
}
function flagDisplay()
{
    let countryValue = $countryDisplay.val();
    let $countryImg = $("#countrySelect");
    console.log(countryValue);
    
        if(countryValue == "Canada"){
            $countryImg.attr('src','images/canada.png');
            $countryImg.attr('alt', 'canadian flag');
         }
        else if (countryValue == "Japan"){
            $countryImg.attr('src','images/japan.png');
            $countryImg.attr('alt', 'Japanese flag');
        }
        else{
            $countryImg.attr('src','images/euro.png');
            $countryImg.attr('alt', 'European Union flag');
        }
            
    }
    
    
