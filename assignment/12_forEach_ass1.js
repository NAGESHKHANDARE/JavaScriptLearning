const array_number = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("1. log array using arro function");
array_number.forEach((currentValue,index)=>console.log(currentValue,"index : ",index));

console.log("-------------------------------------");
console.log("2. find postive number");
array_number.forEach(
    (currentValue)=>{
        if (currentValue > 0) {
            console.log(currentValue);
        }
    }
)

console.log("-------------------------------------");
console.log("3. find negative number add into new array and log");
const negativeNumbers = [];
array_number.forEach(
    (currentValue)=>{
        if (currentValue < 0) {
            negativeNumbers.push(currentValue);
            
        }
    }
)
console.log(negativeNumbers);

console.log("------------------------------------------------");

//antoher exam

const numbers = [3, -5, 1, -2, 7, -8, 0, -4];

const negativeNumber = [];

numbers.forEach(number => {
  if (number < 0) {
    negativeNumber.push(number);
  }
});

console.log(negativeNumber); // Output: [-5, -2, -8, -4]

/*
Using forEach can be a bit more verbose than using 'filter',
 but it's still a valid approach if you need to perform additional logic or transformations on the elements in the array while iterating over them.
*/

console.log("------------------------------------------------");
console.log("4. find the even no and log");

array_number.forEach(
    (currentValue)=>{
        if (currentValue%2==0) {
            console.log(currentValue);
        }
    }
)


console.log("------------------------------------------------");
console.log("5. find the sum and log");
let sum = 0;
array_number.forEach(
    (currentValue)=>{
        sum = sum + currentValue
      
    }
    
)
console.log(sum);


console.log("------------------------------------------------");
console.log("6. find even postion array value and log");

array_number.forEach(
    (currentValue,index)=>{
        if(index%2==0){
            console.log("Even index ",index, " postion value are : ",array_number[index]);
        }
    }
)








