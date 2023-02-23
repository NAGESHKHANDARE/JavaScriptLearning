`use strict`;//futre of es

// city = "akola" --> not allow use variable
var city = "akola";
console.log(city);


//person = {}   --> not allow use const variable
const person = {
    name : "nagesh",
    age : 23
}
console.log(person);

// delete person   --> not allow directly

function show (name, name){
    console.log(name, name);
}
show ("nagesh", 42) // last argument selected defoult both