// Destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

console.log(``);

const swapColors = ["red", "green", "blue", "white", "yellow"];
[swapColors[0], swapColors[4]] = [swapColors[4], swapColors[0]];
console.log(swapColors);

console.log(``);

const colors = ["red", "green", "blue", "white", "yellow"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

console.log(``);

const person1 = {
    firstName: "Ashfak",
    lastName: "Ahmath",
    age: 21,
    job: "Software Engineer"
}
const person2 = {
    firstName: "Atheef",
    lastName: "Ahamed",
    age: 22
}
const {firstName, lastName, age, job = "Unemployee"} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log(``);

function displayPerson({firstName, lastName, age, job = "Unemployee"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
displayPerson(person2);