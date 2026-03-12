let pet1 = {
    name: "Hamlet",
    age: 2,
    gender: "Female",
    service: "Full Groom",
    breed: "Orange Half-Moon Conure"


};
let pet2 = {
    name: "Rocko",
    age: 6,
    gender: "Male",
    service: "Nail Trim",
    breed: "Xoloescuintli"

};

let pet3 = {
    name: "Porfirio",
    age: 1,
    gender: "Male",
    service: "Vaccines",
    breed: "African-Grey Parrot"

};
let petsList = [pet1, pet2, pet3];


function displayPets(){

    let listHTML = "<ol>";

    for(let i=0;i < petsList.length;i++){
        listHTML += "<li>" + petsList[i].name + "</li>";
        
    }
    listHTML += "</ol>";

    let section = document.getElementById("pets");
    section.innerHTML = listHTML;

    section.style.color = "blue";
    section.style.backgroundColor = "beige";
    section.style.fontFamily = "Times New Roman";
    section.style.fontSize = "24px";
    
}
