//ES6 feture

const person ={
    name: "Nagesh",
    age: 38,
    city:"Akola",
    pinCode : 444004,
    totalRun : 55000,
    isMarried : true,
    son : "Athrav"
}
/*
let pinCodeNagesh = person.pinCode;//pinCodeNaesh is varibale name not key also 
let totalRun =person.totalRun;//totalRun is also varibale not key aboue totalRun is key but this is only varibale
let city = person.city;
console.log(pinCodeNagesh,totalRun,city);
*/
//object Distuctuing
let {pinCode, totalRun, city, isMarried, wifeName="Mukta",son="Amit",Name } =person;// this variable use alwas use same key name
console.log(pinCode, totalRun, city, isMarried, wifeName, son, Name);// last Name is not consider bcz there is name not Name so itis varibal is  undefined value


const arrayCompany = ["TSC", "infy", "Google", "Metaverse"];
let  [comany1, com2, thredcom,com,com5="Microsoft",com6] = arrayCompany;
console.log(comany1, com2, thredcom, com, com5, com6 );// it is variable 


// self invoking function or IIFE - immediately invoked function exression
console.log("**self invoking function or IIFE - immediately invoked function exression**");
(function show(){
    console.log("bhar bahr ke likho not call");
})();


console.log("---------------------------------------------");
(function(){
    console.log("no function name = Anonymous Fucntion / unknown function");
})();

let myfun = function(){
    
}




