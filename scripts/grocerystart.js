var bacon = {name:"Bacon", price:"5.00-1lb", imageFileName:"images/bacon.jpg"};
var apple = {name:"Apple", price:"1.00-1lb", imageFileName:"images/apple.jpg"};
var banana = {name:"Banana", price:"2.00-1lb", imageFileName:"images/banana.jpg"};

let groceryList = [bacon, apple, banana];

btnNext = document.getElementById("btnNext");
imgItem = document.getElementById("imgItem");
nameItem = document.getElementById("nameItem");
priceItem = document.getElementById("priceItem");

btnNext.onclick = nextItem;

groceryListIndex = 0;

function nextItem()
{
    if(groceryListIndex === groceryList.length-1)
    {
        groceryListIndex = 0;
    }
    else
    {
        groceryListIndex++;
    }
    console.log(groceryListIndex);
    
    
    imgItem.src = groceryList[groceryListIndex].imageFileName; 
    imgItem.alt = groceryList[groceryListIndex].name;
    nameItem.innerHTML = groceryList[groceryListIndex].name;
    priceItem.innerHTML = groceryList[groceryListIndex].price;

/*
    switch(groceryListIndex) {
        case 0:
            imgItem.src = "images/bacon.jpg";
            imgItem.alt = "picture of bacon";
            nameItem.innerHTML = "Bacon";
            priceItem.innerHTML = "$5.00/lb";
            break;
        case 1:
            imgItem.src = "images/apple.jpg";
            imgItem.alt = "picture of apple";
            nameItem.innerHTML = "Apple";
            priceItem.innerHTML = "$1.00/lb";
            break;
        case 2:
            imgItem.src = "images/banana.jpg";
            imgItem.alt = "picture of banana";
            nameItem.innerHTML = "Banana";
            priceItem.innerHTML = "$2.00/lb";
            break;
    }*/
}


