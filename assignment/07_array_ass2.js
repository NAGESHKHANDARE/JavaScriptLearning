const arrayNumbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(" Array is : ", arrayNumbers);

console.log(" ");
console.log("1. Find the total elements available or length and log on console");
console.log(arrayNumbers.length);

console.log(" ");
console.log("2. Log the first element and last element in arrayNumbers and log on console");
console.log(arrayNumbers[0]," ",arrayNumbers[arrayNumbers.length-1]);

console.log(" ");
console.log("3. Log the thirst last element using length property and log on console  ");
let ans = arrayNumbers.splice(arrayNumbers.length-3)
console.log(ans);
console.log(arrayNumbers.length);


console.log(" ");
console.log("4. Find the all even number and log on console ");
const arrayNumbers4 =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
for (let index = 0; index < arrayNumbers4.length; index++) {
    
    if (arrayNumbers4[index]%2){
       
    }else{ const element = arrayNumbers4[index];
        console.log(element);}
}


console.log(" ");
console.log("5. find the odd number and log on console ");
for (let index = 0; index < arrayNumbers4.length; index++) {
    if (arrayNumbers4[index]%2) {
        const element = arrayNumbers4[index];
        console.log(element);
    }  
}


console.log(" ");
console.log("6. Find all the even positioned elements from arryNumbers, for loop ");
for (let index = 0; index < arrayNumbers4.length; index++) {
    
    if (index%2){
        const element = arrayNumbers4[index];
        console.log(element);
    }
}


console.log(" ");
console.log("7. Find all the odd positioned elements from arrayNumbers, log console ");
for (let index = 0; index < arrayNumbers4.length; index++) {
    
    if (index%2){
        
    }else {const elemento = arrayNumbers4[index];
    console.log(elemento);}
}


console.log(" ");
console.log("8. Find the sum of all elements from arraNumbers, log on console");
let add;
add = 0;
for (let index = 0; index < arrayNumbers4.length; index++) {
    const element = arrayNumbers4[index];
    add = add + element;   
}
console.log(`sum of array : ${add}`);  


console.log(" ");
console.log("9. Find the numbers which are multiple of 5 ");


console.log(" ");
console.log("10. is number 115 and 23 available in array ");
let isAvailab115 = arrayNumbers4.includes(115);
let isAvailab23  = arrayNumbers4.includes(23);
console.log(isAvailab115);
console.log(isAvailab23);


console.log(" ");
console.log("11. insert no -> 55, 66 beofre index 3 and log array on console ");
arrayNumbers4.splice(3, 0, 55, 66);
console.log(arrayNumbers4);


console.log(" ");
console.log("12. Delete 3 elements starting from index 4 and log array on console ");
arrayNumbers4.splice(4,3);
console.log(arrayNumbers4);
console.log(" ");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before splice : ",arr);
let spliceRes = arr.splice(4, 3);
console.log("After splice(4,3) :",arr);
console.log("splice del : ", spliceRes);