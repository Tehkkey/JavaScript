// get the canvas element
const canvas = document.getElementById('canvas');

var context = canvas.getContext("2d");

//canvas.addEventListener('click', drawRoof);
//canvas.addEventListener('click', drawHouseBody);
canvas.addEventListener('click', beginDraw);

function beginDraw()
{
    // getting a pen to draw with - context
    const context = canvas.getContext('2d');
    
    // get access to the select box
    const shape = document.getElementById('shape');
    
    // console.log(shape.selectedIndex);
    switch(shape.selectedIndex)
    {
        case 0:
            drawGroundSky();
            break;   
        case 1:
            drawHouseBody();
            break;
        case 2:
            drawTree();
            break;
        case 3:
            drawDoor();
            break;
        case 4:
            drawWindow();
            break;
        case 5:
            drawRoof();
            break;
        case 6:
            clearCanvas(context);
            break;
        
        
    }
    
    
}
// functions to draw house parts
function drawRoof()
{
    context.fillStyle = "grey";
    context.fillRect(75, 100, 350, 50);
    
    // draw roof outline
    context.strokeStyle = "rgb(217, 214, 212)";
    context.lineWidth = 6; 
    context.strokeRect(74, 99, 351, 51);
}
function drawTree ()
{
    //////////////1st tree//////////////////////////////
    //tree top
    context.beginPath();
    context.moveTo(30, 250);
    context.lineTo(60, 200);
    context.lineTo(90, 250);
    context.closePath();
    context.fillStyle = "rgb(39, 140, 43)";
    context.fill();
    context.strokeStyle = "green";
    context.lineWidth = 3;
    context.stroke();
    //2nd tree top
    context.beginPath();
    context.moveTo(30, 300);
    context.lineTo(60, 250);
    context.lineTo(90, 300);
    context.closePath();
    context.fillStyle = "rgb(39, 140, 43)";
    context.fill();
    context.strokeStyle = "green";
    context.lineWidth = 3;
    context.stroke();
    //tree trunk
    context.fillStyle = "rgb(117, 76, 9)";
    context.fillRect(50, 300, 20, 175);
    
    /////////// 2nd Tree ////////////////////////
    //tree top
    context.beginPath();
    context.moveTo(400, 250);
    context.lineTo(450, 200);
    context.lineTo(500, 250);
    context.closePath();
    context.fillStyle = "rgb(39, 140, 43)";
    context.fill();
    context.strokeStyle = "green";
    context.lineWidth = 3;
    context.stroke();
    //2nd tree top
    context.beginPath();
    context.moveTo(400, 300);
    context.lineTo(450, 250);
    context.lineTo(500, 300);
    context.closePath();
    context.fillStyle = "rgb(39, 140, 43)";
    context.fill();
    context.strokeStyle = "green";
    context.lineWidth = 3;
    context.stroke();
    //tree trunk
    context.fillStyle = "rgb(117, 76, 9)";
    context.fillRect(440, 300, 20, 160);
    
}

function drawHouseBody ()
{
    context.fillStyle = "rgb(157, 161, 160)";
    context.fillRect(100, 153, 300, 300);
    
}

function drawDoor ()
{
    context.fillStyle = "rgb(176, 136, 100)";
    context.fillRect(220, 350, 75, 100);
}

function drawWindow()
{
    context.fillStyle = "rgb(255,255,255)";
    context.fillRect(160, 220, 50, 50);
    context.fillStyle = "rgb(255,255,255)";
    context.fillRect(300, 220, 50, 50);
    
}

function clearCanvas(context)
{
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGroundSky()
{
    // blue sky
    context.fillStyle = "rgb(16, 48, 176)";
    context.fillRect(0, 0, 510, 440);
    // green ground
    context.fillStyle = "green";
    context.fillRect(0, 440, 510, 60);
    // moon
    context.arc(50, 50, 30, 0, Math.PI * 2);
    context.fillStyle = "rgb(242, 242, 242)";
    context.fill();
}