//string
var element = "alphabeta"
console.log(`type of alphabeta : ${typeof element}`);

console.log(" ");
console.log("-------------------------------------");
console.log(" ");
//number
var element = 55;
console.log(`type of number : ${typeof element}`);

console.log(" ");
console.log("-------------------------------------");
console.log(" ");
//bigint
let bigInt1 = 9007199254740991n;
let bigInt2 = BigInt(9007199254740991);
let res = bigInt1 * bigInt2; // 8.007199254740991e+31n
console.log(res);
console.log("typeof big-int number MaX no. ( the maximum safe integer (2^53 - 1)) : ",typeof res);

console.log(" ");
console.log("-------------------------------------");
console.log(" ");
//boolun
let age = 22;
let isAdult = age >= 18;
console.log(isAdult) // true

let hasPermission = false;
let canAccess = isAdult && hasPermission;
console.log(canAccess) // true

console.log( `typeof isAdult : ${typeof isAdult}, typeof canAccess : ${typeof canAccess}`);

console.log(" ");
console.log("-------------------------------------");
console.log(" ");
// nan  and object
var num1 = new Number ("Prathamesh")
console.log(`Result is "Prathamesh" = ${num1}`); // NaN
console.log(`Type of num1 is  : ${typeof num1}`);// object  bcz no and string present

var resultDivide = 0/0;
console.log(`Result is 0/0 : ${resultDivide}`); // not a number NaN
console.log(`Type of ${resultDivide} is ${typeof resultDivide}`); //NaN type is number

console.log(" ");
console.log("-------------------------------------");
console.log(" ");
// undefined
let name;
console.log("in name : ",name); // undefined
console.log(" typeof name : ",typeof name); // "undefined"

//You can also use void operator to check if a variable is undefined

let named;
if(void named){
   console.log("named is undefined");
}

console.log(" ");
console.log("-------------------------------------");
console.log(" ");
//object
const person = {firstName:"John", lastName:"Doe"};
console.log("typeof person : ",typeof person);

console.log(" ");
console.log("-------------------------------------");
console.log(" ");
// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log("typeof cars : ",typeof cars);

console.log(" ");
console.log("-------------------------------------");
console.log(" ");
// Date object:
const date = new Date();
console.log(date,"typeof date : ",typeof date);




