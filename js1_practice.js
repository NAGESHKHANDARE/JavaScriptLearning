//explicitly=opreter=casting
var str = "123";
console.log(str, "typeof str = ",typeof str);
var num = Number(str);//typecasting str to a number 
console.log(num, "typeof num = ",typeof num);

//implicit=convertion
var str = "Hello "; 
var num = 123; 
var result = str + num; // implicit conversion of num to a string 
console.log(result); // outputs "Hello 123" 


const arrayofnumber = [0, 2, 3, 20, 10, 5, 6];
const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2,  19];
const narray = array.concat(arrayofnumber);
console.log(narray);//(18) [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19, 0, 2, 3, 20, 10, 5, 6]

const res = narray.filter((value)=>{
 return value%2==!0;
}
);
console.log(res);
const fres = res.reduce((cvt,value)=>{
  return  cvt=cvt + value;
})

console.log(fres);