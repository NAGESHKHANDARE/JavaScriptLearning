console.log("    factorial 6! = 6*5*4*3*2*1    ");


function factorial(num){
    let result = 1;
    for (let i=1; i<=num; i++){ result *= i;}     // result = result * i
    return result;
}
console.log(`output of : `,factorial(6));


