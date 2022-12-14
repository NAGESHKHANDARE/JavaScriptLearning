console.log("Q 1 : Write a fucnton Expression to get squre of the number ex - 5,6,25,100 ?");

console.log("Ans : ");
var square = function(num){
    console.log("Square of",num," = ",num*num);
}

square(5);
square(6);
square(25);
square(100);
console.log("==========================================================");
console.log("Q 2 : Check and log type of functon ?");
console.log("Ans : ");
console.log("TypeOf square = ", typeof square);
console.log("==========================================================");
console.log("Q 3 : Write a FE to get the area of rectangle plot [length = 499 and width = 917] ?");
console.log("Ans : ");
var area = function(length, width){
    console.log("Value of length and width is",length," and ", width, "resp.");
    console.log("Area of Rectangle = ",length*width );
}
area(499, 917);
console.log("==========================================================");
console.log("Q 4 : Write a FE with two args and should swap the passed values and log on console before swap and after swap values inside function itself ?");
console.log("Ans : ");
var swapValues = function(val1, val2){
    console.log("Before SWAP", val1, val2);
    var temp = val1;
    var val1 = val2;
    var val2 = temp;
    console.log("After SWAP", val1, val2);
};
swapValues("Virat","Anushka");
swapValues(1000, 2000);
console.log("==========================================================");
console.log("Q 5 : Write a FE which can perform the below steps for the given string JS the most popular language ?");
console.log("Ans : ");

var statment = "JS the most popular language"; 

console.log("Given string => ", statment);

console.log("A. Find the total character available in the string ?", "\n" ,"Ans - ",statment.length);

console.log("B. find the charac at index 6","\n", "Ans - ",statment.charAt(6));

console.log("C. find the charac at index 11","\n", "Ans - ",statment.charAt(11));

console.log("D. find the last charc using lenth property","\n", "Ans - ",statment.charAt(statment.length-1));

console.log("E. find the very first charac from the given string","\n", "Ans - ",statment.charAt(1));

console.log("F. find the lenth of the given string and then calculate the square of lenght and log it","\n", "Ans - ",statment.length,"\n","Ans - ", statment.length*statment.length);