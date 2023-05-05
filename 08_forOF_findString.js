/*let str = "codemind technology";
let s = " ";
for (let index = str.length-1; index >=0; index--) {
   s=s + str.charAt(index);
   console.log(s);
   if( " "){
    break
   }
   
}
*/


console.log("====1===");
console.log("Array=>");
//array
// pahade parmane
let fruits = ["apple", "mango", "orange", "strawberry","grapes"]
for(const element of fruits){
    console.log(element);
}

console.log("===2====");
console.log("string=>");
//string
const string = `code mind`;
for(let i of string){
    console.log(i);
}


console.log("====3====");
console.log("=>Map");
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}


console.log("====4====");
console.log("=>Set");

class Employee{
    constructor(empID, empName, empAge,empCity)
    {
        this.empID =empID;
        this.empName=empName;
        this.empAge=empAge;
        this.empCity=empCity;
    }
 }
 const empNagesh = new Employee(11,"Nagesh",38,"Akola");
 const empDhir = new Employee(22,"Dhiraj",23,"Pune")
 const empSachin = new Employee(33,"Sachin",24,"Mumbai");
 const empGayatri = new Employee(44,"Gayatri",26,"Nagpur");

 const setofEmployees = new Set();
setofEmployees.add(empNagesh);
setofEmployees.add(empDhir);
setofEmployees.add(empSachin);
setofEmployees.add(empGayatri);
console.log(setofEmployees);

for (const emp of setofEmployees){
    console.log(emp);
    console.log(emp.empID, emp.empCity);
}


console.log("====5====");
console.log("=>Object");
const myObj = { 
    name: 'John', 
    age: 30, 
    gender: 'male' 
  };

  console.log("a=>");
  // Iterating over object keys
  for (const key of Object.keys(myObj)) {
    console.log(key);
  }
  
  console.log("b=>");
  // Iterating over object values
  for (const value of Object.values(myObj)) {
    console.log(value);
  }
  
  console.log("c=>");
  // Iterating over both keys and values
  for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`);
  }

  

  //
  console.log("====6====");
console.log("=>other");
  const myArray = ['apple', 'banana', 'cherry'];

  console.log("a=>");
// Iterating over an array
for (const element of myArray) {
  console.log(element);
}

// Iterating over a string
console.log("b=>");
const myString = 'hello';

for (const character of myString) {
  console.log(character);
}

// Iterating over a set
console.log("c=>");
const mySet = new Set(['apple', 'banana', 'cherry']);


for (const element of mySet) {
  console.log(element);
}

// Iterating over a map
console.log("d=>");
const myMap2 = new Map([
  ['name', 'John'],
  ['age', 30],
  ['gender', 'male']
]);


for (const [key, value] of myMap2) {
  console.log(`${key}: ${value}`);
}

















