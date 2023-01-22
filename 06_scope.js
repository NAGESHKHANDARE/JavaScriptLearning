var aa = "nagesh khandare";

/*
var isMarried = true;
if(isMarried)  {
    var greet = "Congratulation";
    console.log(greet);               // greet display output
}
console.log(greet);              // alos greet display output becose var greet is Global



var isMarried = true;
if(isMarried)  {
    let greet = "Congratulation";     //due to let cmd  this is not Global so this greet is implement in only {} not out side  bcz  block scope
    console.log(greet);
}
console.log(greet);                      //greet is not defined show output

*/

function add(num1, num2){
    var result = num1+ num2;
    console.log(result);      // ans 14

    var isMarried = true;
    if(isMarried)  {
        var greet = "Congratulation";     //due to let cmd  this is not Global so this greet is implement in only {} not out side  bcz  block scope
        console.log(`inside var greet ${greet}`);
    }
    console.log(`outside but in function block var greet : ${greet}`);
    console.log(`inside result : ${result}`);

}
add(5,9);
// console.log(`outside REsult is : ${result}`);  // outside functoio so not show




var score;
let and;

var score =90;
console.log(`firs value of score == ${score}`);
let ans = "nagesh";
ans = "hi";  // update let and var 
console.log(`firstr value of and === ${ans}`);  //
const PI = 3.14;
console.log(`pi == ${PI}`);




var score = 95;
var i =11
if (10>i) {
    let ans = "khandare";   //in {} let use and its bondry is{}
    console.log(ans);
    };
// const PI = 3.00; not hole page define

