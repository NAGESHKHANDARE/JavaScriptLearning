

// if ssc_marks greater than equal to 35 then pass or fail
 var sscMarks = 39;
 var rsultPassOrFail = sscMarks>=35 ? "Pass" : "Fail";

console.log(`Result is ${rsultPassOrFail}`);


//var res  = codition1 ? "setance1" : "sentance2";

// for gender male check marriage eligiblilty with value age = 23

console.log("=============================================================");

var sscResult  = function (sscMarks){
    //var  resultPassOrFail = (sscMarks>=35 && !(sscMarks>100)) ? "Pass " : "Fail";
    //var  resultPassOrFail = (sscMarks>=35 && sscMarks<100) ? "Pass " : "Fail";  Ans 23f  45p  65p  1200f  tenf -10 fail
    var resultPassOrFail = (sscMarks < 0 || sscMarks > 100 )           //|| typeof String
        ? "In valid Data" : (sscMarks>35 ? "Pass" : "Faill");
    return resultPassOrFail;
}

console.log(`result is 23 ${sscResult(23)}`);//valid value
console.log(`result is 45 ${sscResult(45)}`);//valid value
console.log(`result is 65 ${sscResult(65)}`);// invalid value
console.log(`result is 1200  ${sscResult(1200)}`);//invalid value
console.log(`result is "Ten" ${sscResult("Ten")}`);// invalid value
console.log(`result is -10 ${sscResult(-10)}`);// invalid value

console.log("=============================================================");
console.log("                 ==  AND ===       ");
num1 = 10;
num2 = "10"
console.log("typeof num1((10) = ",typeof num1);
console.log("typeof num2('10') = ",typeof num2);
console.log("typeof '100' = ",typeof `100`);

var result = num1==num2 ? "Equal" : "Not Equal";  //== atomatic convertion not consider typeof
console.log(`num1==num2 ==>${result}`);

var res = num1===num2 ?"Equal" : "Not Equal";    // === not convert and check typeof of value
console.log(`num1==num2 ==>${res}`);