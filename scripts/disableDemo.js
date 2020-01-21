let btnDisable = document.getElementById("btn-disable");
btnDisable.onclick = disable;

    function disable()
    {
        name = document.getElementById("fname").value;
        document.write("<h1>"+name+"</h1");
        document.getElementById("fname").disabled = true;
    }