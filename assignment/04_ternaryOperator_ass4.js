 var result = 0 == ''
 console.log(`Ans is (0 =='') ${result} and type is ${typeof result} becouse of no value in ''`);
 console.log(" ");

 var result1 = 0 =='0'
 console.log(`Ans is (0 =='0') ${result1} and type is ${typeof result1} becouse '0' means false and 'show string' so true `);
 console.log(" ");

 var result2 = 0 == false
 console.log(`Ans is (0 == false) ${result2} and type is ${typeof result2} becouse false means 0 so true`);
 console.log(" ");

 var result3 = null == undefined
 console.log(`Ans is (null == undefined) ${result3} and type of null is ${typeof null} and type of undefined is ${typeof undefined} type of result is ${typeof result3} \n becouse In JavaScript, null is a primitive value that is used to signify the intentional absence of an object value,\n whereas undefined is a primitive value that acts as a placeholder for a variable that has not been assigned a value. and \n ull and undefined values are equal when compared using the JavaScript equality operator.`);
 console.log(" ");

 var result4 = 1==[1]
 console.log(`Ans is (1==[1]) ${result4} and type is ${typeof result4} `);
 console.log(" ");

 var result5 = 1==true
 console.log(`Ans is (1==true) ${result5} and type is ${typeof result5} becouse true means 1 `);
 console.log(" ");

 var result6 = 1=='1'
 console.log(`Ans is (1=='1') ${result6} and type is ${typeof result6} becouse '1' convert in number`);
 console.log(" ");