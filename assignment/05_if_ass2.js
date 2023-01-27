console.log(`1> create a function to check passed argument number value is even or odd and return the result as EVEN OR ODD. ex 45,70,67,98  ?`);

function number(argument) 
{
    
    if (argument%2===0) {
        Result = "Even"
    }else
    {
        Result = "Odd"
    }
    return Result;
}
var fR = number(45)
console.log("45 ",fR);
var fR = number(70)
console.log("70 ",fR);
var fR = number(67)
console.log("67 ",fR);
var fR = number(98)
console.log("98 ",fR);

console.log(" ");
console.log('-----------------------------');
function checkEvenOdd(num) {
    return num % 2 === 0 ? "EVEN" : "ODD";
}

console.log("45 ",checkEvenOdd(45));  // ODD
console.log("70 ",checkEvenOdd(70));  // EVEN
console.log("67 ",checkEvenOdd(67));  // ODD
console.log("98 ",checkEvenOdd(98));  // EVEN

console.log(" ");
console.log('-----------------------------');
console.log(`2> check if person is eligibel for vote or not ex- 18,20,17,40 ?`);

function ages(age) {
    
}
if (age <100 && age >=18 ) {
    var fresult = "you are eligible"
    return fresult;
}
console.log("18 ", ages(18));
console.log("20 ", ages(20));
console.log("17 ", ages(17));
console.log("40 ", ages(40));