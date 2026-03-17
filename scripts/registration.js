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




// let pet4 = new Pet("Firulais", 4, "Mexican Yellow Dog", "Male", "Full Groom");
// let pet5 = new Pet("Solovino", 9, "Mexican Yellow Dog", "Male","Vaccines" );
// let pet6 = new Pet("Chuletas", 3, "Dauschund", "Male","Nail Trimming");

const productForm = document.querySelector("form");
const body = document.getElementById("body");

function Pet(name, age, breed, gender, service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

function registerPet(event){

    event.preventDefault(); 
    console.log(event);
    // constructor//

  

    
    let name = productForm.elements["petName"].value;
    let age = productForm.elements["petAge"].value;
    let breed = productForm.elements["petBreed"].value;
    let gender = productForm.elements["petGender"].value;
    let service = productForm.elements["petService"].value;
    

const row = document.createElement("tr");
const newPet = new Pet(name, age, breed, gender, service);


row.innerHTML = `
    <td>${newPet.name}</td>
    <td>${newPet.age}</td>
    <td>${newPet.breed}</td>
    <td>${newPet.gender}</td>
    <td>${newPet.service}</td>
    


`;
body.appendChild(row);

}
