




function show(...details){// all value store in ...spreat parameter
    console.log(details);
}
show("Naesh",38,"Akola")  

function info(name,...details){//only sachin store in name and remaing all value in spreat parameter ... and its always last writer 
    console.log(name,details);
}
info("Sachin",47,"mumbai")

// Function with default parameter argumenet value
console.log("***Function with default parameter argumenet value***");
function sum (n1,n2){
    console.log(n1,"+",n2);
    console.log(n1+n2);
    console.log("------------");
}
sum(10,20);  //10+20=30
sum(8);      //8+undefined = NaN

function showN(N1,N2=0) {  // N2 is pre default argument and value is 0 zero
    console.log(N1,"+",N2);
    console.log(N1+N2);
}
showN(9);// 9+0=9

