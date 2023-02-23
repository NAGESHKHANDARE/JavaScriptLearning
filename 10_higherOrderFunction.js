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



