console.log(`TCS Eligibility, \n Condition is Graduation score is greater than equal to 70% OR HSC score is greater than equal to 80% OR SSC score is greater than 90%  `);
console.log(" ");

//var tcs = 
function tcs(gradScore, hscScore, sscScore, candidateName){
    var result = (gradScore>= 70 || hscScore>=80 || sscScore>= 90 )? "Eleigible" : "Not Eleigible";
    
    console.log(`Congratulatins,${candidateName} you are ${result} for TCS interview`)
    //return result;

}
tcs(80,86,90,"NAGESH")
tcs(70,65,55,"Amit")
tcs(60,79,88,"Sandip")


//var fr =console.log(`Congratulatins,${candidateName} you are ${tcs} for TCS interview`,tcs(80,86,90,"NAGESH"));