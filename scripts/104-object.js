//how to create4 an object

let student = {
    name: " Ariana",
    lastname: "Osuna",
    age: 19
};

//access attributes of an object

student.name
console.log(student.name);
console.log(student.age);

console.log(`Hello my name is ${student.name}, I am ${student.age}`);

// create =two students objects.

let student1 = {
    name: " Jesse",
    lastname: "Soto",
    age: 40
};

let student2 = {
    name: " Tato",
    lastname: "Loco",
    age: 20
};

let students = [student, student1, student2];

students[2];
console.log(students[2].name);