console.log("Before swap");
var myNumber =100;
var youNumber = 300;
console.log(myNumber,youNumber); // 100  300
// i exchange no then 
//myNumber=youNumber
//console.log(myNumber,youNumber); they not exchage 300 300 so
var temp = myNumber;
myNumber=youNumber;
youNumber=temp;
console.log("After swap");
console.log(myNumber,youNumber);  //300  100

