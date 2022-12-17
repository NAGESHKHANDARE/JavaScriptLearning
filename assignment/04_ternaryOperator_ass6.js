
    function gradeCalculation (mark){   
     if (0>= mark || mark >100) {
        console.log(`You are ${mark} Mark. it is not valid, So Please Provide the valid marks`);
     }    
     
     if (mark >=90 && mark <=100) {
        console.log( `Funtastic marks : ${mark}, Your grad is A+`);
     }

     if ( mark <90 && mark >=75) {
        console.log(`Excellent marks${mark}, Your grade is A`);

     }

     if ( mark<75 && mark>=50 ) {
        console.log(`Goog Marks ${mark}, your grade is B, `);
     }

     if ( mark<50 && mark >=35 ) {
        console.log(`Mark is ${mark}, your grade is C,Need improvement`);
     }

    }

gradeCalculation(98)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(-7)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(64)
gradeCalculation(49)