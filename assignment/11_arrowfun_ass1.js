console.log("1. No arg and No return ");
let GM = ()=>{
    console.log(`Good Mornilng, Today is Monday `);
}
GM();

console.log("2. arg and No return ");
console.log("a.");
let multiply = (n1,n2,n3)=>{
    console.log(n1*n2*n3);//50
}
multiply(5,5,2);
multiply(10,4);//NaN= not a number bcz not assign n3 value

console.log("b. assing default value n3=1");
let multiplyad = (n1,n2,n3=1)=>{
    console.log(n1*n2*n3);//40
}
multiplyad(10,4);


console.log("3. five arg and return value ");
console.log("   abc.=>");
let add = (a1,a2,a3,a4,a5)=>{
    let added = a1+a2+a3+a4+a5;
    return added;
}
let addResult = add(100,100,200,349,756);
let msgResult = add("I am ","learing ","ES6 ","features ","in depth")
console.log(addResult);
console.log(msgResult);

