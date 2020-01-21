const btnPay= document.getElementById("btnPay");


btnPay.onclick = calcPay;

function calcPay()
{
    let name =getName();
    let hours =getHours();
    let rate= getRate();
    let bonus= getBonus();
    let total = calcTotal(hours,rate, bonus).toFixed(2);
    displayResults(name, total); 
}

function getName()
{
    const name = prompt("What is your name?");
    console.log(name);
    return name;
}

function getHours()
{
    const hours = parseFloat(prompt("How many hours did you work this week?"));
    console.log(hours);
    return hours;
}

function getRate()
{
    const rate = parseFloat(prompt("What is your current pay rate?"));
    console.log(rate);
    return rate;
}

function getBonus()
{
    const bonus = confirm("Did you work on a holiday?");
    if(bonus === true){
    return 50;
}
    else {
    return 0;
}
console.log(bonus);
return bonus;
}

function calcTotal(hours,rate,bonus)
{
    const total= (hours*rate)+bonus;
    return total;
}

function displayResults(name, total)
{
    document.getElementById("output").innerHTML=(name+", you earned "+"$"+total);
}
