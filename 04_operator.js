
var num1 = 10;
var num2 = 5;
 
console.log("================ Arithmetic Operators(univary opert)==============");
var addResult = num1 + num2;
console.log(`addition is ${addResult}`);
var subResult = num1 - num2;
console.log(`Subtraction is${subResult} `);
var mulResult = num1 * num2;
console.log(`multiplication is ${mulResult}`);
var divResult = num1 / num2;
console.log(`Division is ${divResult}`);

var moduloResult = num1 % num2;
console.log(`mudulus is ${moduloResult}`); // remainder 0

var moduloResult = num1 % 4;
console.log(`modulus is ${moduloResult}`);



console.log("========== Unary Operators==========");
var num3 = 10;
num3 =  ++num3;  //num3 + 1 = 11
console.log(`Icrement opertor reulst is ${ num3}`);

var num4 = 5;
var res = --num4; //num4= num4 -1
console.log(`Decrement opertor reulst is ${res}`);



console.log("==========Assignment Opertor(binary operter)==============");

var moduloResult = num1 % 3;
console.log(`Modulus is ${moduloResult}`);

num1 += num2;
//var num1 = num1 + num2;
console.log(`compund Addition ${num1}`);//num1 =15
console.log(`compund Subracrion ${num1 -= num2}`);// 15-5=10


console.log("=============comparison operators===============");
 var num1 = 10 ;
  var num2 = 5;
  var num3 = 10;
  var reulst = num1 > num2;
  console.log(`> operator  - Greater than ${reulst}`);

  var reulst = num1 < num2;
  console.log(`< operator  - less than ${reulst}`);

  var reulst = num1 < num3;
  console.log(`< operator  - GReater than ${reulst}`);

  var reulst = num1 >= num2;
  console.log(`< operator  - greter than ${reulst}`);






