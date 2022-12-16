console.log("--------------For Male candidate Condition---------------");
console.log(" ");
function maleMarriageEligibility(gender,age,boyName){
    
 console.log(`Hey ${boyName} you are ${(age>=21 && gender == "Male") ? "Eligible" : "Not Eligible"} for Marriage.`);

}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(" ");
console.log("--------------For Female candidate Condition---------------");
console.log(" ");

function femaleMarriageEligibility(gender,age,girlName){
    
    console.log(`Hey ${girlName} you are ${(age>=18 && gender == "Female") ? "Eligible" : "Not Eligible"} for Marriage.`);
   
   }
   femaleMarriageEligibility("Female",16,"Jenifer");
   femaleMarriageEligibility("Female",27,"Malinda Gates");