console.log("1");
function one(){
    return 100;
}
let value1 = one();
console.log(value1);

console.log("2");
function two() {
    return [2,5,8,9]
}
let value2 = two();
console.log(value2);

console.log("3");
function three() {
    return {
        city : "akola"
    }
}
let vlaue3 = three();
console.log(vlaue3);

console.log("4");
function four() {
    let obj = {
        pin : 444004
    }
    return obj;
}
let value4= four();
console.log(value4);

function show(myNumber){  // myNumber is an argument
    console.log(myNumber);
}
//console.log(myNumber);  it is not access bcz outside scope{}
show(100);


console.log("---------------------------------------");
console.log("****** Closure ********");
//Closure= inner fun access scope global outer and own inner variable so this inner fun called closer 

let globalVariable = 100;//scope Global
let outer = function (){
    let outerVariable = 200;// scope outer{}
    let inner = function(){
                console.log("Inner Function");// inner fun
                console.log(globalVariable);//100
                console.log(outerVariable);//200
                let innerVariable = 300;// scope inner{}
                console.log(innerVariable);//300
            }
            return inner;
}
//let returnValue = outer();//returnValue = inner fun save bcz return to outer
//returnValue();//reurnValue=inner so ()use = inner();
outer()();//outer()=inner  so  use / we can invoke inner funtion with like this


