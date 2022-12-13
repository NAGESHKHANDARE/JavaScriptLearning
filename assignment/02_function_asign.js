console.log("===========================================================");
console.log("****Function with no Argument and No Return****");
function firstPoint(){
    console.log("I Love JavaScript");
    console.log("JavaScript JS is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions");
}
firstPoint()

console.log("===========================================================");
console.log("****Personal Details with Argument and No Return****");
function personalDetails(firstName,lastName,collegeName){
    console.log(firstName,lastName,);
    console.log(collegeName);
}
personalDetails("First Name : NAGESH", "Last Name : KHANDARE", "College Name : SSGBCOE, Bhuswal");

console.log("==========================================================");
console.log("****SWAP using Function****");
function swap_values(value1,value2){
    console.log("--Before value1 and value2");
    console.log(value1,value2);
    temp=value1;
    value1=value2;
    value2=temp;
    console.log("After SWAP :", value1, value2);
    
}
swap_values("Virat","Anushka");
swap_values(1000,2000);

console.log("==========================================================");
console.log("****Function with Argument and Return****");
function addThreeNumbers(num1,num2,num3){
console.log(num1+num2+num3);
}
addThreeNumbers(10.23, 600, 40);
addThreeNumbers(" Hello"," Good"," Morning");

















