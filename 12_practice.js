function add(n1,n2){
    console.log("add ", n1+n2);
}
function multiplay(n1,  n2){
    console.log("multiplay ", n1*n2);
}

function addmul(v1,v2){

}
addmul(add(4,6),multiplay(8,4));



console.log("Callback with arg functions");
let add2 = function(n1,n2){
    console.log(n1+n2);
}
let multiplay2 = function (n1,n2) {
    console.log(n1*n2);
}

function operation(CallbackAdd,Callbackmul) {
    console.log("operation");
    CallbackAdd(4,6);
    Callbackmul(8,5);
}
operation(add2,multiplay2);