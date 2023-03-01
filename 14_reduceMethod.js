


const arrayofnumber = [0, 2, 3, 20, 10, 5, 6];
const result = arrayofnumber.reduce((runningTotal,value)=>{// defult two value runnigntotal and value
        console.log("Running total = ",runningTotal);
        console.log("Value = ",value);
        return runningTotal + value
});
console.log("Result = ",result);

// find even no addtion
const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2,  19];
// even no
// sum of even no
const evenNums = array.filter(value => value%2==0 );
const finalResult = evenNums.reduce((runnigntotal,value)=>{
        return runnigntotal + value;
});
console.log("FinalRes ",finalResult);
//OR
const evenSum = array.filter(value => value%2==0 ).reduce((runnigntotal,value)=>runnigntotal + value);
console.log("Evensum ",evenSum);








