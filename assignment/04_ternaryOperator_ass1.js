console.log("Q.1 find Greater no between two no" );
var greater = function(no1,no2){
    var result = no1 > no2 ? no1 : no2;
    
    return result;
}
var chek = console.log("Between 10 and -10 = ",greater(5 , -5)); 
var chek = console.log("Between 800 and 899 = ",greater(800, 899));

console.log("=======================================================");
console.log("Q.2. Check 29, 44, 0, 101 are even or odd? ");

var check = function(arg){
    var res = (arg % 2)==0 ? "Even" : "odd";
    return res
};
var fr = console.log("29  = ",check(29));
var fr = console.log("44  = ",check(44));
var fr = console.log("0   = ",check(0));
var fr = console.log("101 = ",check(101));


console.log("=======================================================");
console.log("Q.3. Find word length is even or odd for following word? ");

var wl = function(word){
    var tl = word.length;
    var eo = (tl % 2)==0 ? "Even" : "odd";
    return eo
};
var fres = console.log("JavaScript length is  = ",wl("JavaScript"));
var fres = console.log("developer length is  = ",wl("developer"));
var fres = console.log("Google length is  = ",wl("Google"));