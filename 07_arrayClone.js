console.log(" Array shallow cloning ");
let arrayofEvenNum = [0, 2, 4, 6, 8];
let arrayOfNum = arrayofEvenNum; // shallow cloning
arrayofEvenNum[1]=10;
console.log(arrayofEvenNum); // [0 10 4 6 8]
console.log(arrayOfNum);  // [0 10 4 6 8]


console.log();
console.log("-------------------------------------");

//Deep cloning
console.log("Array Deep Cloning");
//let arrayofEvenNum = [0, 2, 4, 6, 8];
let arrayClone = [... arrayofEvenNum];//Deep clone
arrayofEvenNum[2]=100;
arrayClone[2]=200;
console.log(arrayofEvenNum);// [0 10 100 6 8]
console.log(arrayClone);   //  [0 10 200 6 8]

console.log();
console.log("-----------------Marge array using Concat() --------------------");
//concat or marge array
let array1 = [0, 1, 3, 8];
let array2 = [00, 11, 22];
let concatA = array1.concat(array2)
console.log(array1);
console.log(array2);
console.log(concatA);
console.log(" ");
console.log("-----------------Marge array using spreat() --------------------")
let spreatA = [...array1, ...array2, 99, 100];//
console.log(spreatA);


console.log("------------Marge Object using spreat()---------------");
let empNagesh = {
    name : "Nagesh",
    role : "Software Developer"
}
let empAddress = {
    city : "pune",
    street : "WAkad - 411057"
}
let mergedObject = {...empNagesh,...empAddress}
console.log(mergedObject);


// spread operater use clongin or deep cloning and marge array




