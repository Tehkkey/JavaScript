"use-strict";

//use jquery to attach a function to our button
$("#search").click(fetchData);

function fetchData()
{
    //get the year
    let year = $("#txtYear").val();
    console.log(year);
    //get driveline
    let driveline = $('#driveLine').val();
    console.log(driveline);
    
    // create teh flag
    let found=false;
    
    //first anonymous function
    $.getJSON("JSON/cars.json", function(jsonObject){
        console.log(jsonObject);
        // second anonymous function
        $.each(jsonObject, function(index, item){
            if(item.Identification.Year == year)
            {
                if(item["Engine Information"].Driveline == driveline)
                {
                found=true;
                //append year
                $('#output').append("<h3>"+"Year: "+["Engine Information"]+year+" " +driveline+
                                    " "+"</h3>");
                } // +["Engine Information"] +driveline
            }
        });
        if (!found)
           {
             $('#output').append("<h3>"+"Year: "+year+ " and "+driveline+" was not found"+"<h3>");
           }
           //clear the textbox
           $('#year').val("");
    });
    
    
}