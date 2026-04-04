// save data//
$("#saveButton").click(function (e){
    e.preventDefault();

    const name = $("#userName").val().trim();
    localStorage.setItem("username", name);
    alert(`${name} has been saved.`);
    $("form").get(0).reset();
});

// retrieve//

$("#loadButton").click(function (e){
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    $("#result").text(storedUsername);

    if(storedUsername){
        $("#result").text(storedUsername);
    }else{
        $("#result").text("No data found");
    }
});

$("#clearButton").click(function (e){
    e.preventDefault();   
    localStorage.removeItem("username");
    location.reload();
    });