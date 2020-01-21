"use-strict";

const $p_myClass = $("p.myClass");

$("#btnHide").click(function() {
    $("p.myClass").hide();
    $(this).hide();
    $("#btnShow").show();
});

$("#btnShow").on("click", showInfo);

function showInfo(e)
{
    console.log(e);
    // show the paragraphs
    $p_myClass.show();
    //hide the show button
    $(this).hide();
    $("#btnHide").show();
}