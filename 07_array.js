let array = [5, 10, 8, 55, 11, 44, "string", true];

console.log(array);//(8) [5, 10, 8, 55, 11, 44, 'string', true]
console.log(typeof array);// object
console.log(array.length);//8
console.log(array.length-1);//7
console.log("element of zero index is = ",array[0]);//5
array[1]=100;// update index no 1 ie 10 to 100
console.log("update",array);//update (8) [5, 100, 8, 55, 11, 44, 'string', true]
console.log( array.indexOf(44));//find index of 44 =ans= 5
console.log(array[9]);//undefine bcz array lenth is 8 not
array.push(99,88,77)//99 88 77 add last in array
console.log(array);//(11) [5, 100, 8, 55, 11, 44, 'string', true, 99, 88, 77]
array.unshift(11,22,33);// add in frount side
console.log(array);//(14) [11, 22, 33, 5, 100, 8, 55, 11, 44, 'string', true, 99, 88, 77]
let ResultPop = array.pop();//remove last element
let ResultShift = array.shift();//remove first element
console.log(ResultPop);//77
console.log(ResultShift);//11
console.log(array);//(12) [22, 33, 5, 100, 8, 55, 11, 44, 'string', true, 99, 88]
console.log(array.slice(3));//read from 3rd index 
                            //(9) [100, 8, 55, 11, 44, 'string', true, 99, 88]
console.log(array.slice(2,5));//read from 2nd index to 5 index
                            //(3) [5, 100, 8]
let array1 = [5, 10, 8, 55, 11, 44, "string", true];
console.log(array1.splice(4));//deleting after 4th elem deleting remaing all element
                //(4) [11, 44, 'string', true]
console.log(array1);//(4) [5, 10, 8, 55]
let array2 = [5, 10, 8, 55, 11, 44, "string", true];
console.log(array2.splice(1,4));// delete from index 1 to 4th element
                    //(4) [10, 8, 55, 11]
console.log(array2);//(4) [5, 44, 'string', true]
console.log(array);//(12) [22, 33, 5, 100, 8, 55, 11, 44, 'string', true, 99, 88]
console.log(array.splice(2,0,999));// insrt index 2nd a 999 value
console.log(array);//(13) [22, 33, 999, 5, 100, 8, 55, 11, 44, 'string', true, 99, 88]
array.splice(0,2,44,"three");// replace 2 value form index 0 is 22-44,33-three
console.log(array);//(13) [44, 'three', 999, 5, 100, 8, 55, 11, 44, 'string', true, 99, 88]
console.log(array.includes("three"));//check element three in array=>true
let joinR = array.join("-");//
console.log(typeof joinR," => ",joinR);//string  -  44-three-999-5-100-8-55-11-44-string-true-99-88
let concatR = array1.concat(array2);
console.log(typeof concatR,"=>",concatR);//object => (8) [5, 10, 8, 55, 5, 44, 'string', true]
console.log(array1.length);//4
array1.length = 3 //decrese length
console.log(array1);(3) [5, 10, 8]
array1.length =5 // increse length
console.log(array1);//(5) [5, 10, 8, …]
array1.length = 0 // array clear****
console.log(array1);//(0) []

console.log(" ");   
console.log("1. for of loop =>");
let array3 = [999, "string", false];

for (const element of array3){
                console.log(element);
};

console.log("2. Traversing array =>");
for (let index = 0; index < array3.length; index++) {
    const element = array3[index];
    console.log(element);
}

console.log("3. Reverse order =>");
let array4 = [1, 2, 3, 4, 5, 6, 7];
let lengtA4 = array4.length;
console.log("Length = ",lengtA4);
for (let index = array4.length-1; index > 0; index--) {
    const element = array4[index];
    console.log(element);
};


console.log("4. Even index no =>");
for (let index = 0; index < array4.length; index++) {
        if(index%2==0){
            console.log(array4[index]);
        }   
};

console.log("5. Even number =>");
for (let index = 0; index < array4.length; index++) {
    const element = array4[index];
    if(element%2==0){
        console.log(array4[index]);
    }    
};

console.log("6. Addtion =>");
let sum = 0 ;
for (let index = 0; index < array4.length; index++) {
    const element = array4[index];
    sum = sum + element;
};
console.log(sum);//28


console.log("7. Array shallow cloning =>");
let array5 = [ 4, 5, 6, 9];
let array6 = [44, 55, 66, 99];
array5=array6;
console.log(array5);//(4) [44, 55, 66, 99]
array6[0]=100;// both a5 and a6 is changes
console.log(array5);
console.log(array6);

console.log("8. Array Deep Cloning");
let array7 = [44, 55, 66, 99];
let array8 = [...array7];//deep clone
console.log(array8);
array7[1]=100;
array8[1]=200;
console.log(array7);//(4) [44, 100, 66, 99]
console.log(array8);//(4) [44, 200, 66, 99]

console.log("9. Array json Cloning");
let array9 = JSON.parse(JSON.stringify(array8));
console.log(array9);//

console.log("10. Array Marge");
console.log("10.a concat=>");
let concatRes = array7.concat(array8);
console.log(concatRes);//(8) [44, 100, 66, 99, 44, 200, 66, 99]
console.log("10.b spreat =>");
let spreadRes = [...array7, ...array8, 555, 6666]
console.log(spreadRes);//(10) [44, 100, 66, 99, 44, 200, 66, 99, 555, 6666]
















