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

function Pet(name, age, breed, gender, service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

let pet4 = new Pet("Firulais", 4, "Mexican Yellow Dog", "Male", "Full Groom");
let pet5 = new Pet("Solovino", 9, "Mexican Yellow Dog", "Male","Vaccines" );
let pet6 = new Pet("Chuletas", 3, "Dauschund", "Male","Nail Trimming");

const productForm = document.querySelector("form");

function registerProduct(event){

    event.preventDefault(); 
    console.log(event);

  
    
    let name = productForm.elements["petName"].value;
    let age = productForm.elements["petAge"].value;
    let breed = productForm.elements["petBreed"].value;
    let gender = productForm.elements["petGender"].value;
    let service = productForm.elements["petService"].value;

}