console.log("-------Age Valid or Not for Voting----------");
console.log(" ");
/*
if (18>=agevalue>=119) {
    console.log(`You are ${agev} and you are Eligible`);
}
*/

/*
function age (agevalue){
    var result = 119>=agevalue && 0<=agevalue && 18<=agevalue ? "Eligible" : "Not Eligible"
    console.log(`You are ${agevalue} age and you are ${result}  `);
}

age(45);
age(17);
age(8);
age(20);
age(-10);
age(200);
age(0);
*/

function age(agevalue) {
  var result =
    119 < agevalue || agevalue <= 0
      ? "in valid data"
      : 18 <= agevalue && 119 >= agevalue
      ? "Eligible"
      : "Not Eligible";
  console.log(`You are ${agevalue} age and you are ${result}  `);
}

age(45);
age(17);
age(8);
age(20);
age(-10);
age(200);
age(0);

/*var votingEligibility = function(age){if(age<=0 || age>120 ){
    console.log(`Age value : ${age}, Invalid data`);}
    
    if(age>=18 && age<=120) {
        console.log(`your age is : ${age}, You can vote`);}
        
        if(age<18 && age>0){
            console.log(`your age is : ${age}, You can note vote`);}}
            votingEligibility(20);
            votingEligibility(89);
            votingEligibility(1500);
            votingEligibility(0);


function gradeCalculation(marks){
    if(marks<=0 || marks>100){console.log(`Please provide th valid data`);}
    if(marks>=90 && marks<=100){console.log();}
    if(marks>=75 && marks<90){console.log("A");}}

    */