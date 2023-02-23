// Arrow function no argumetn and no return value
let show = ()=>{
    console.log("Hellow");
}
show();


// Arrow Function with argument
let sum = (n1,n2)=>{
    console.log(n1+n2);
}
sum(15,5);


// Arrow Function with argument and return value
let multiply = (n1,n2)=>{
    let mul = n1*n2;
    return mul;
}
let mulResult = multiply(6,5);
console.log(mulResult);

