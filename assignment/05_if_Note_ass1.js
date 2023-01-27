const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good Mor"
} else if (time < 20 ) {
    greeting = "Good day"
} else{
    greeting = "Good Eve"
}
console.log(greeting);




// STAR
const person = {
    name : "Nagesh",
    age  : 37
}
console.log(`${person.name} is ${person.age}`);

