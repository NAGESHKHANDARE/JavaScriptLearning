var numAdd = 10 + 40; //50
var strAdd = "Pooja" + 70; // Pooja 70
console.log(`strAdd (Pooja + 70) = "${strAdd}`);
console.log(" ");

console.log(
  ` + operator can do the the type conversion as well from string to number `
);
console.log(" ");

var numStr = "100";
var num = +numStr; // explicit conversion
console.log(`typeof numStr ("100") is = ${typeof numStr}`); // string
console.log(`typeof num (+numStr) =  ${typeof num}`); // number
console.log(" ");

var numStr = "Chandra";
var num = +numStr;
console.log(`typeof numStr ("Chandre") = ${numStr} is: ${typeof numStr}`); //  string
console.log(`typeof (num =+numStr) ${num} =  ${typeof num}`); // number                               +value = type is number
console.log(" ");

console.log(`== comparison ${20 == "20"}`); // Implicit conversion
console.log(" ");

var myNumber = -77.333;
console.log(`myNumber values ${myNumber} and it's type is: ${typeof myNumber}`);
var strMyNumber = myNumber.toString();   // CONVERT NUMBER INto string type
console.log(
  `strMyNumber values ${strMyNumber} and it's type is: ${typeof strMyNumber}`
);
