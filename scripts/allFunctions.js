function createArray()
{
    // indices   0    1    2    3    4
    let gpas = [4.0, 2.7, 3.5, 2.1, 1.5];
    console.log(gpas.length);
    
    // print first element
    console.log(gpas[0].toFixed(1));
    
    // print last element
    console.log(gpas[4].toFixed(1));
    
    // a better way to print the last element
    console.log(gpas[gpas.length - 1]);
    
    let sum = gpas[0] + gpas[1];
    return sum;
     
}
function iterateArray()
{
    let ages = [6, 15, 25, 67];
    
    //use a traditional for loop to sum
    
    let total= 0;
     
    for(let i=0; i<ages.length;i++)
    {
        total += ages[i];
    }
    console.log("Total is " +total);
    
    
}

function reiterateArray(ages)
{
    
    
    let total = 0;
    for(let age of ages)
    {
        total += age;
    }
    console.log("Total is "+total);
}

function composers(name)
{
    //print out the orignal array
    console.log("Original: "+name);
    
    //add Handel to the beginning index 0
    name.unshift("Handel");
    console.log("Unshifted Handel " +name);
    
    // remove last index from array
    
    console.log("Popped :"+name.pop());
    console.log("Now contains: "+name);
    
    //sort the array and print
    name.sort();
    console.log("Sorted array: "+name);
    
    //reverse the array
    name.reverse();
    console.log("Reversed: "+name);   
}

