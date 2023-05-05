// higher order function
function antoherfunc(){
    console.log("i am insdie anther function");
}

function firstFun(argumentFirstFun){//HOF
    argumentFirstFun();//first call to antherfun
            let innerFuc = function(){
                                        console.log("Inner function");
                                      }
    return innerFuc;// second time return value innerfun to first fun   amd save to inner var last step call again to inner fun so consel output      
}
let inner = firstFun(antoherfunc);
inner();




//practice
function f1() {
    console.log("f1 display");
};


function f2(arg2) {
                     arg2();
                                let infunc = function () {
                                                            console.log("infunc display");
                                                            }
                     return infunc;                            
}

let callInFunc = f2(f1);//first call to f1 
                        // second time return infuc to f2 and stored in callinfunc
    callInFunc();// this is call to infuc




