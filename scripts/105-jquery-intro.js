$("#triggerEventButton").click(function(){
    alert("Trigger Event")
});



$("#hideButton").click(function(){
    $("p").hide();
});

$("#showButton").click(function(){
    $("p").show();
});

$("#toggleButton").click(function(){
    $("p").toggle();
});
$("#changeTextButton").click(function(){
    $("p").text("This is the new text");
});
$("#addCssButton").click(function(){
    $("p")
        .css("color", "red")
        .css("border", "solid", "1px", "red")
        .css("padding", "10px");
});
$("#applyCssClassButton").click(function(){
    $("p").addClass("my-class");
});

// 