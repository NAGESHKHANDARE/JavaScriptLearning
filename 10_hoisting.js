// pre declar or use is called hosting like var and normal function
console.log(city);// undefined they not show city cant before iitialization
var city = "akola";

village = "Thakarkheda";
console.log(village);// Thakarkheda
var village;
/*
console.log(pinCode);// cnanot access pinCode before iitialization
console.log(country);//cnanot access country before iitialization
let pinCode
const country ="India"
*/



//Function
function normalfun () {
    console.log("normal function so i am display");
}
normalfun();


upside();
function upside(){
    console.log("upside show call");
}


// function expression
display();// uncaught type Error display is not a function
var display=function(){
    console.log("hi, i am fun expr so i am not console");
}
