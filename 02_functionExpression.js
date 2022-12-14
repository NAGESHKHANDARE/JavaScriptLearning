 var myName = "NAGESH";  // Stored string name in myNmae
 console.log(myName);


 // about propety use store whole function in variabel
                                  // function show (){}  == function name is show                                
 var showResult = function (){   // if show not defined like funcion(){} then this function is unknown function

 };
 showResult();  // we can store a fucntion a value



 var substraction = function(num1, num2){  //no name of function
    var result = num1 - num2
    console.log("subst = ", result);
    return result;
 };
var output = substraction( 45, 20);  // pass the value to variable substraction  and call to substraction
console.log(output);
 














