// why we call "funtion" as "First Calss citizen" in JS
//1. we can store fun as a value
let functionExpr = function(){
    console.log("1. inside fun expression");
}
functionExpr();

// 2. we can  return function from another function
function outer (){
    console.log("2.a check");
    function display(){
        console.log("2.b inside display funtion");
    }
    let inner = display;
    return inner;
}
outer()();



// 3. we can pass function as argument to another function
function anotherFunction(){
    console.log("3. I am inside another function");
}

function firstFun(argumentFirstFun){
argumentFirstFun()
}
firstFun(anotherFunction);
//anotherFunction --> argumentFirstFun --> argumentFirstFun = antoherfunc so argff anto(); call




























