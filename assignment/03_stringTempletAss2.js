var stat = "        Hey you are doing good, keep it up";
console.log("1. Given string is :",stat);
console.log("2. The length of given string is ",stat.length);
var newstat = stat.trim();
console.log("3. After removing all extra spaces, resulted string is : ",newstat);//"  Hey you .. " space remove bewtween "   Hey"
console.log("4. Total count of Extra Spaces is :", newstat.length-26);
console.log("5. First character after Trim is : ",newstat.charAt(0)," and Last character after Trim is : ",newstat.charAt(newstat.length-1)) ;
console.log("6. Total word count after removing all spaaces is :", newstat.length);
console.log('7. Index of word "goog" is : ', newstat.indexOf("good"));
console.log("8.1. Substring strarting from idnex 18 using substring is :",newstat.substring(18,));
console.log("8.1. Substring strarting from idnex 18 using slice is :",newstat.slice(18,34));
console.log('9. check string starts with word "up" is : ', newstat.endsWith("up"));
console.log('10. check string starts with word "Hey" is : ',newstat.startsWith("Hey"));
