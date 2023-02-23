//Anil Home Work

function anilHomeWork (callBack){
    console.log("Anil is doning homework ...");
    console.log("After some time... Anil did homwork..");
    callBack();
}
anilHomeWork(sunilHomeWork)

//Sunil homework

function sunilHomeWork() {
    console.log("I am happy Anil, you have completed homework");
    console.log("I am bit lazy and don't have as well");
    console.log("So copying as it is yur homework");

}


//Time set function
//1.
function show1 (){
    console.log("1. Time Set Function 2000");
}
setTimeout(show1,2000);
//2. 
setTimeout(
    function show2(){
    console.log("2. Time Set Function 3000");
                    },
         3000)





