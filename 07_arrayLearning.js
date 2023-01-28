let arrayOfNumbers = [ 5, 10, 4, 6, 7, 10, 6];          
console.log(arrayOfNumbers);      // start zero 0,1,2.
console.log("");
let arraymix = [5, true, "string"]  
let arrymixto = typeof arraymix;              //--- > typeof is object
console.log(`typeof arrymix is : ${arrymixto}`);


console.log(" ");
console.log("=======total number of elements availbabel in array=========");
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayofNo --->  ${totalElements}`);
let typeofarray = typeof arrayOfNumbers;
console.log(`type of array - arrayofno --> ${typeofarray}`);


console.log("  ");
console.log( `====Accessing array elements=====`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at zero index : ${elementAtZeroIndex}`);
console.log(`Element at fifth index : ${arrayOfNumbers[4]}`);
console.log(`last Element : ${arrayOfNumbers.length-1}`);
console.log(`when provided value is greater than lentght : ${arrayOfNumbers[8]}`);
arrayOfNumbers[2] = 100;   // update or modify value using index
console.log( arrayOfNumbers);
let indeoOf7 =arrayOfNumbers.indexOf(7)   // [5,10,100,6,'7',10,6]
console.log(`index of of 7 --> ${indeoOf7}`);  // ans 4 th index bcz start 01234567 if out of this arry no like 4 but in arry 4 not presnt then ans -1
let indeoOf10 =arrayOfNumbers.indexOf(10)   // [5,10,100,6,'7',10,6]
console.log(`index of of 10 --> ${indeoOf10}`);  // 10 in array two times in index 1 and 5 so that time firsst index occors show in ans = 1


console.log(" ");
console.log(`=====Traversing array using for loop=====`);
for (let index = 0; index < arrayOfNumbers.length; index++) {   // lenth is 7 and first index value is 0 after that break initliztion  = 'initliztin conditon update' 
const element = arrayOfNumbers[index];
console.log(element);
}


console.log(" ");
console.log("====================================================================");
console.log(` accessinf only evne index values`);
for (let index = 0; index < arrayOfNumbers.length; index++) // index value is even then
{
 if (index%2) 
  {
    const element = arrayOfNumbers[index];
    console.log(element);   
  }
}
console.log(` `);
console.log(`-----------traversing array using for loop in reverse order-----------`);
// initialization   condition     update
let lastIndex = arrayOfNumbers.length-1;
for (let index = lastIndex;      index > 0 ; index--) {
    
    const element = arrayOfNumbers[index];
    console.log(`reverse order element = ${element}`);
}


console.log(` `);
console.log(`-----------Accessing salary of each emplyee-----------`);
// array bof salaries 
// such array does not name such array called un reffernce array / unrchable object   [4,8,5,6,]
let arrayOfSalaries =[10000, 20000, 30000, 20000, 40000]
let sumOfSal =0;                  // intiali zero
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];
    sumOfSal = sumOfSal + element; 
    //console.log(`Toal salary of all employee is : ${sumOfSal}`); if i am write this postion then ans is write every step of sumOfSal so write after full loop complited
}
console.log(`Toal salary of all employee is : ${sumOfSal}`);  // it s ans is out of for{} braket so after completed loop last ans is theire  120000
// let arrayOfSalaries =[10000, 20000, 30000, 20000, 40000];  i am not write again arrayOfSalaries bcz itis variable is let so it is block scope so do not redeclar


console.log(" ");
console.log(` ------ push() methods--------`);// last no put
var arrayOfNum =[4, 5, 6, 8, 9, 1];
console.log(`intial array : ${arrayOfNum}`);
arrayOfNum.push(3);                 // add elemente in the last 3 no add in last 
arrayOfNum.push(11,22, 33);  
console.log(`final  array : ${arrayOfNum}`);


console.log(" ");
console.log(` ------ unshift() methods--------`);// add frnt side no
var arrayOfNum =[4, 5, 6, 8, 9, 1];
console.log(`intial array : ${arrayOfNum}`);
arrayOfNum.unshift(77);
arrayOfNum.unshift(100, 200, 99);
console.log(`final  array : ${arrayOfNum}`);//100 200 99 77 4 5 6 8 9 1


console.log(" ");
console.log(` ------ pop() methods--------`);
//remove last no
var arrayOfNum =[4, 5, 6, 8, 9, 33];
console.log(arrayOfNum);
let popResult = arrayOfNum.pop();
console.log(`pop result : ${popResult}`);
console.log(arrayOfNum);


console.log(" ");
console.log(` ------ shift() methods--------`);
//remove first no
var arrayOfNum =[4, 5, 6, 8, 9, 33];
console.log(arrayOfNum);
let shiftResult = arrayOfNum.shift();  // remove 4 no
console.log(`shift result : ${shiftResult}`);
console.log(arrayOfNum);


console.log(" ");
console.log(` ------ slice() methods--------`);
var arrayOfNum =[4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
// write from 3 index (if count start zero)
let slicetResult = arrayOfNum.slice(3);  // [8 9 33 66]
let sliceRes = arrayOfNum.slice(2, 5); //[6 8 9]
console.log(slicetResult);
console.log(sliceRes);


console.log(" ");
console.log(`------- splice() methods---------`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);
console.log(`after using splice(3) method`);
console.log("Array after deleting element", arrayOfNum);//[4 5 6]
console.log("Total deleted element using splice method : ",spliceResult);// [8 9 33 66]

console.log("----");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2,3); // remove elemtnt from 2nd to toal 3 no ie 6,8,9
console.log(`after using splice(2,3) method`);
console.log("Array after deleting element", arrayOfNum);// (4) [4 5 33 66]
console.log("Total deleted element using splice method : ",spliceRes);//(3)[6 8 9]


console.log(" ");
console.log("--Insurting elemtnt in the array --");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];//(7)[]
console.log(arrayOfNum);
arrayOfNum.splice(2, 0, 88);
console.log(arrayOfNum);// (8)[4 5 88 6 8 9 33 66]
arrayOfNum.splice(1, 0, 55, 88, 99, 22) //before index value1 insurt value 55, 88, 99, 22
console.log(arrayOfNum);// (12)[4 55 88 99 22 5 88 6 8 9 33 66]


console.log(" ");
console.log("=== replacing elment in th array ===");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(3, 1, 22);// replce index no 3rd and replace 8 only one value so 1 and replec to 22
console.log(arrayOfNum);//[4 5 6 "22" 9 33 66]


console.log("=== replacing elment in th array when splice (2, 3, 99,77, 44) ===");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2, 3, 99,77, 44);// replce index no 2nd and rplece value 6,8,9 so 3 and replec to 99,77, 44
console.log(arrayOfNum);//[4 5 99 77 44 33 66]


console.log(" ");
console.log("----- for of loop-------");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
for (const element of arrayOfNum) {    //forof use cmd
    console.log(element);
    
}


console.log(" ");
console.log(" ==== include() -- check value ===");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let isAvailable  = arrayOfNum.includes(9);
console.log("cheak value 9 in array : ",isAvailable);// true 9 ahe  
let isAvailab100  = arrayOfNum.includes(100);
console.log("cheak value 100 in array : ",isAvailab100); //false 100 nahi 


console.log(" ");
console.log("----- joint() -------");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
//for join()
let jointResult = arrayOfNum.join("-");// array no joint each other by -
console.log(jointResult); // [4-5-6-8-9-33-66]
console.log(typeof jointResult); // string


console.log(" ");
console.log("----- concat() -------");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfName = [ "moni", "Jenny", "Shenny", " Tomy"];
let arryOfcities =["pune","akola", "mumbai"];
//con cat
const concatArray = arrayOfNum.concat(arrayOfName,arryOfcities)
console.log(concatArray);//[4 5 6... ,'moni','jenny'..,'pune'... ]
console.log(typeof concatArray);//object


console.log(" ");
console.log("----- Resize an array -------");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);//7
//lenth resize
arrayOfNum.length = 5;
console.log(arrayOfNum);
console.log(arrayOfNum.length);//5
// length resize incre
arrayOfNum.length = 10;
console.log(arrayOfNum);//(10)[4 5 6 8 9, ....]
console.log(arrayOfNum.length);//10




