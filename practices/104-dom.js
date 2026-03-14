function changeTitle(){
    // alert("Is working");

    // get the html element with id and store as variable.
    let title = document.getElementById("title");

    title.innerHTML = "Hello, Cohort 66";
    title.style.color ="red";

// get all the elements with class= "text" and store in variable

let paragraphs = document.getElementsByClassName("text");

paragraphs[0].style.color = "blue";
paragraphs[1].style.color = "red";


}

function addItem(){
    let value = document.getElementById("itemInput").value;
    let list = document.getElementById("list");

    // create HTML elements in the JS

    let li = document.createElement("li");

    // add the value. inject html.
    li.innerHTML = value;


    // add the li to the list
    list.appendChild(li);

    // clear input field
    // document.getElementById("itemInput").reset();
    // not working code
}

