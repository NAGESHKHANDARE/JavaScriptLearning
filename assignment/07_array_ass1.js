console.log("         Array");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(" ");
console.log(fruits_seasonal);
console.log(`1. Log the first and last elemnt on console`);
console.log("Ans :",fruits_seasonal[0]," & ",fruits_seasonal[fruits_seasonal.length-1]);

console.log(" ");
console.log("2. Add element -> Papay befor the element 'Banana' and then log array on console");
fruits_seasonal.unshift("Papaya");//first side
console.log(fruits_seasonal);

console.log(" ");
console.log("3. Remove 'Mango' from the array");
fruits_seasonal.splice(4,1);// delet 4th no by only one
console.log(fruits_seasonal);

console.log(" ");
console.log("4. Add elemetn or insert an element 'Pineapple' at the last position");
fruits_seasonal.push("Pineapple");// last side
console.log(fruits_seasonal);

console.log(" ");
console.log("5. insert an element - 'Dragon Fruit' before 'Water Melon'");
console.log(fruits_seasonal);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log(" ");
console.log("6. Replace an element 'Orange' with 'Kiwi' ");
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);

console.log(" ");
console.log("7. Log the elements starting from index 1 to 4");
fruits_seasonal.splice(4);
console.log(fruits_seasonal);


console.log(" ");
console.log("8. Only select last 3 element and log on console : use the length property");// splice and slice method
const fruits_seasonal1 = ["Banana", "Orange", "Apple", "Mango", "Water Melon", "Dragon Fruit","Kiwi"];
console.log(fruits_seasonal1);
let last3 = fruits_seasonal1.splice(fruits_seasonal1.length-3);
console.log(last3);
const fruits_seasonal2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon", "Dragon Fruit","Kiwi"];
let ans = fruits_seasonal2.slice(fruits_seasonal2.length-3,fruits_seasonal2.length);
console.log(ans);

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let last_3 = myArray.slice(myArray.length-3,myArray.length);
console.log(last_3);
