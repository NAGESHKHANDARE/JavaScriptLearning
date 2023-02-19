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
console.log(mapOfNumbers);//{}

const valueForKey22 = mapOfNumbers.get(22);
console.log(valueForKey22);//Twenty two

const valueForKey11 = mapOfNumbers.get(11);//overWrite
console.log(valueForKey11);//Ten+ one not Eleven bcz overwrite

console.log(mapOfNumbers);
console.log(mapOfNumbers.size);
mapOfNumbers.delete(11);
console.log(mapOfNumbers);