$("#serviceForm").submit(function(event){
    event.preventDefault();

// get the values of the inputs

// validate if the values are empty or not
// change the borders of hte input to red

    const name = $("#serviceName").val().trim();

    if ( name == "" ){
        alert("Please enter desired service!");
        $("#serviceName").css("border", "2px solid red");
        return;
    }

    // if(name == ""){
    //     alert("Hey The values is required");
    // } else{
    //     alert(`the value is: ${name}.`);
    // }

});

$("#submitButton").click(function(){
    $("#service").text("Your service has been schedule. please see your email for more information");
});
