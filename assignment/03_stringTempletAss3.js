function squrarOfWordLength(arg){
    
    console.log("Length of Word =  ",arg.length);
    result = arg.length * arg.length;
    return result;
}
console.log("1.1 JavaScript");
var Squre = squrarOfWordLength("JavaScript");
console.log("Squre of words = ",Squre);

console.log("1.2 Google Chrome");
var Squre = squrarOfWordLength("Google Chrome");
console.log("Squre of words = ",Squre);

console.log("1.3 Developer Smart");
var Squre = squrarOfWordLength("Developer Smart");
console.log("Squre of words = ",Squre);

console.log("=================================================");

console.log("Given String = I am Angular Developer");



var stored = function(atr){
console.log("Total Length is = ", atr.length);
console.log("Total Word is =", atr.split(" ").length);
console.log( "2.1] String length / total no of word : ", atr.length/ atr.split(" ").length);
console.log( "2.2] String length * total no of word : ", atr.length * atr.split(" ").length);
};
stored("I am Angular Developer");











//var string = function(){
    
    //var length = string.length;
    //console.log("Length is = ", string.length );
   // var word = string.split();
    //console.log("Word is = ", word );
//console.log("2.1] String length / total no of word : ", length/ word );
//};
//string("I am Angular Developer");