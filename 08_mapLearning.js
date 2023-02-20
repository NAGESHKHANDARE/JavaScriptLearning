console.log("-----------------------MAP--------------------------");
 // Creating a Map
let myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");//(key, value)
myMap.set("age", 30);
myMap.set("country", "USA");

//map
console.log(myMap);//Map(3) {size: 3, name => John, age => 30, country => USA}

// Checking the size of the Map
console.log(myMap.size);  // Output: 3

// Retrieving a value from the Map based on its key
console.log(myMap.get("name"));  // Output: "John"

// how to check whether key exists or not?
console.log("has : ",myMap.has("country"));//has : true

// Removing a key-value pair from the Map
myMap.delete("age");

// Checking the size of the Map after removing a key-value pair
console.log(myMap.size);  // Output: 2

console.log("--------------------LOG   of---------------------------");
//for
const allkeys =myMap.keys()
for(const key of allkeys){
    console.log(myMap.get(key));
}

console.log(`----------------------------------------------------------------`);
const mapOfNumbers = new Map();// creatie mao
mapOfNumbers.set(11, "Eleven");// set key and value pair
mapOfNumbers.set(22,"Twenty two");
mapOfNumbers.set(2, "Two");
mapOfNumbers.set(11,"Ten+ one");
mapOfNumbers.set(33,"Eleven");
mapOfNumbers.set(44,"Forty four");
mapOfNumbers.set(50,"Fifty");
console.log(mapOfNumbers);//{}

const valueForKey22 = mapOfNumbers.get(22);
console.log(valueForKey22);//Twenty two

const valueForKey11 = mapOfNumbers.get(11);//overWrite
console.log(valueForKey11);//Ten+ one not Eleven bcz overwrite

console.log(mapOfNumbers);
console.log(mapOfNumbers.size);
mapOfNumbers.delete(11);
console.log(mapOfNumbers);



console.log("====== Traversing over Map ======");
const keysOfMap = mapOfNumbers.keys()
console.log(keysOfMap);
for (const key of keysOfMap) {
    console.log(key,  mapOfNumbers.get(key));
}
console.log("---------");
class Employee{
    constructor(empID, empName, empAge,empCity){
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

 const mapOfEmployees = new Map();// key --emp id   value  --> employee object
mapOfEmployees.set(empNagesh.empID, empNagesh);// u also write this
mapOfEmployees.set(22, empDhir);
mapOfEmployees.set(33, empSachin);
mapOfEmployees.set(44, empGayatri);

const keyofMapEmp = mapOfEmployees.keys();
console.log(keyofMapEmp);
for (const key of keyofMapEmp) {
    const employee = mapOfEmployees.get(key);
    console.log(employee.empName,employee.empCity);
    
}

