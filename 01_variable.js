var myName;  // variable declaration
myName = "Nagesh Khandare"; // variable initialization
console.log(myName);

var myFrdName = "Sachin Tendulkar";  // variable declaratin and initialization at the same time
console.log(myFrdName);

myFrdName = "MS Dhoni";  // Variable update
console.log(myFrdName);

console.log("===Learing typeof===");
var age = 37 // string ie  "" amd ''
var ageType =typeof age;   // value store shwo 
console.log(age);
console.log(`agetype = ${ageType}`);


var pinCode ="444004";

var city ="Akola";

var isMarried="true";


console.log("====Learing Undefined===")
var country; // variable declaration
console.log(country); //undefined
country = "India"; // initialization
console.log(country)



var companyName="null";
console.log(companyName);
console.log(typeof companyName);



console.log(typeof 45);  var weight=45;
console.log(typeof "billgate"); var microsftOwner="billgates";
console.log(typeof false); var areYouMad= false;



console.log("===strongly typed vs loosely typed===");
// string microsoftOwaner ="Billgates";  --- java code ---in microsftOwner only string charc. stored
// microsftOwaner = true;

var microsftOwner = "Billgates";
console.log(typeof microsftOwner);  //---string
microsftOwner = 45;
console.log(typeof microsftOwner);   // --- number
microsftOwner = true;
console.log(typeof microsftOwner)    // --- boolean
