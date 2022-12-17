
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

function age (agevalue){
    var result = 119<agevalue || agevalue<=0 ? "in valid data" : ( 18<=agevalue && 119>=agevalue ? "Eligible" : "Not Eligible" )
    console.log(`You are ${agevalue} age and you are ${result}  `);
}

age(45);
age(17);
age(8);
age(20);
age(-10);
age(200);
age(0);


