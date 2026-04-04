$("#knowMoreButton").click(function(){
    $("#resumeContainer").slideToggle(400);
});

$("#changeModeButton").click(function(){
    $("body").toggleClass("dark-mode");

    const isDark = $("body").hasClass("dark-mode");

    if(isDark){
        $("h1").text("Dark Mode");
    }else{
        $("h1").text("Light Mode");
    }

});



