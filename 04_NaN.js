var resultDivide = 0/0;
console.log(`Result is 0/0 : ${resultDivide}`); // not a number NaN
console.log(`Type of ${resultDivide} is ${typeof resultDivide}`); //NaN type is number
console.log(" ");

var resultAdd = resultDivide + 10;
console.log(`Result is  resultDivide + 10 = ${resultAdd}`); //NaN
console.log(`Type of is : ${typeof resultAdd}`);//number
console.log(" ");

var num = new Number ("100")
console.log(`Result is "100" = ${num}`); //100
console.log(`Type of is : ${typeof num}`); // object
console.log(" ");

var num1 = new Number ("Prathamesh")
console.log(`Result is "Prathamesh" = ${num1}`); // NaN
console.log(`Type of is : ${typeof num1}`);// object

