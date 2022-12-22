console.log("Condition \n if age is 0, -ve, >120 then invalid data and other ie > then 18 is valid");
console.log(" ");

var votingEligibility = function (age){
    if (age<=0 || age>120) 
    {console.log(`Age ${age} = Invalid data`);} 
    else {
        //console.log(`Valid data`);
        if (age>=18) 
        {console.log(`${age} = Congratulation you can vote`);}
        else
        {console.log(`${age} = Sorry you are not eligible for vote`);}}
    }
        votingEligibility(45);
        votingEligibility(17);
        votingEligibility(8);
        votingEligibility(20);
        votingEligibility(-10);
        votingEligibility(200);
        votingEligibility(0);
console.log(" ");


        console.log("---------------------------------------------------------------------------------");
        console.log("condition \n pars>90 = A+, \n 90<pars>=75 = A, \n 75<pars>=50 = B \n 50<pars>=35 = C \n pars <= 0, or >100 not valid and string type then show please provide the vailid pars " );
        console.log(" ");


        var pars = function(par){
            if (par<=0 || par>100) {
                console.log(`${par} : Not in valid number format`);
            } else {
                if (typeof par === "number") {
                     
                     
                     if (par >=90 && par <=100) {
                        console.log( `${par} : Funtastic MArks, Your grad is A+`);
                     }
                
                     if ( par <90 && par >=75) {
                        console.log(`${par} : Excellent marks, Your grade is A`);
                
                     }
                
                     if ( par<75 && par>=50 ) {
                        console.log(`${par} : Goog marks, your grade is B, `);
                     }
                
                     if ( par<50 && par >=35 ) {
                        console.log(`${par} : marks, your grade is C,Need improvement`);
                     }


                } else {
                    console.log(`${par} : please provide the vailid marks, becouse of ${typeof par} type`);
                }
            }
        }


        pars(90)
        pars(80)
        pars(91)
        pars(0)
        pars(150)
        pars(-7)
        pars(35)
        pars(29)
        pars(64)
        pars(49)
        pars("91")
        pars("Eighty")