 /* function display(){
    console.log("My name : NAGESH");
    console.log("My sirName : KKHANDARE");
    console.log("My sir name is : GAJANAN SIR");
}


display();  //function call  or function invocation   
//===============================================================================

// wirte a function show wihc sohuld log you colleage name

function show(colloge){
    console.log(colloge);
}
show("myCollageName : ssgbcoe Bhuswal");

//-----------------------------------------------------------------------

                                                                     

function showDetails(myName){
 console.log("Details", myName);
}

showDetails("Mohit Sharma"); 

//======================================================================
// rajuBhaiy is nukar   function with argumetn

function rajuBhaiy(pokit, bag, mobile){
    console.log(pokit, bag, mobile);
}
rajuBhaiy(100, "Bag", "Mobile");
//==========================================================

// 100 200
// 2  4
//"You"   "me"
// "nagesh"   "avinash"
 // SWAP

 var value1= 100;
 var value2 = 200;
 console.log("BEfore swap", value1, vlaue2);
 var temp   = value1
 value1= value2;
 vlaue2=temp;
 console.log("BEfore swap", value1, vlaue2);


 console.log("BEfore swap", value1, vlaue2);
 var temp   = value1
 value1= value2;
 vlaue2=temp;
 console.log("BEfore swap", value1, vlaue2);

 var value1= 2;
 var value2 = 4;
 console.log("BEfore swap", value1, vlaue2);
 var temp   = value1
 value1= value2;
 vlaue2=temp;
 console.log("BEfore swap", value1, vlaue2);

 var value1= "you";
 var value2 = "me";
 console.log("BEfore swap", value1, vlaue2);
 var temp   = value1
 value1= value2;
 vlaue2=temp;
 console.log("BEfore swap", value1, vlaue2);

 var value1= "nagesh";
 var value2 = "avinash";
 console.log("BEfore swap", value1, vlaue2);
 var temp   = value1
 value1= value2;
 vlaue2=temp;
 console.log("BEfore swap", value1, vlaue2);


 // shortcutt
 function swapValues(value1,value2)                // total {} functin defination
 {     
    console.log("BEfore swap", value1,vlaue2);    // value1, value2 ==> argument
 var temp   = value1
 value1= value2;
 vlaue2=temp;
 console.log("BEfore swap", value1, vlaue2);
 }

 swapValues(100, 200);                           // 100, 200 ==> values
 swapValues(2, 4);                               // swapValue(100, 200) ==> fucntion call/ function inpock
 swapValues("nagesh","avinahs");                // swapValue ==>function invacation
 swapValues("you", "me");
 swapValues(first, second)
 
//==========================================================                      */

function hello(myName);
{
    console.log(myName);    //'undefind' anser  bcz no "vlaue" defind
}
hello();

//=======================================================

console.log("Functio with argumetns and return value");
function rajuBhaiy(paisa){
    console.log("Going in market",);
    console.log("Purchased fresh vegetables",);
    console.log("come back");
    return "Bag of vegetables";
}
var bagOfVegetables= rajuBhaiy(100);
console.log(bagOfVegetables);       // Ans=Bag of vegetables






