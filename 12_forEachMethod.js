let arrayNumbers =[10,3,4,50,6];

arrayNumbers.forEach(function(currentValue, index, array){
    console.log(currentValue, index, array);
});

console.log("-------------------------");
console.log("a. only one arg");
arrayNumbers.forEach(function(currentValue){// complsary one argumet not 3
    console.log(currentValue);
});


console.log("-------------------------");
console.log("b. arrow fun");
arrayNumbers.forEach((currentValue)=>{
    console.log(currentValue);
});

console.log("-------------------------------------------");
console.log("c. arrow fun but single arg and single log");
arrayNumbers.forEach(currentValue=>console.log(currentValue)); 
// single argu and singl line consle due to write single line



console.log("Find even number");
const array=[2, 3, 4, 5, 6, 7, 0, 34, 57];
console.log(array);
array.forEach((currentValue)=>{
   if (currentValue%2==0) {
    console.log(currentValue);
   } 
});

// value and index
array.forEach((currentValue,index)=>{
    console.log(currentValue,"index : ", index);
})














