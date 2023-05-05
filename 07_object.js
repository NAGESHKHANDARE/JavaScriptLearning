//object => const name { total operation}

const  parson = {
    height : 6,
    "weight" : "sevnty", // proerty  : value
    "age" : 23,
    ages : 60,
    name : "nagesh",
    
    speak : function () {
        console.log(`hey i can spea english and hindi`);
    }
}
console.log("");
console.log(`---------------------------------------------`);
console.log(typeof parson); // object
console.log(parson);

console.log("");
console.log(`---------------------------------------------`);
// select partulcal property by dot
console.log(`Accessing object properties using DOT notation`);
const parsonAge = parson.age;
const parsonages = parson.ages;
console.log(`parson age are string : ${parsonAge}`);
console.log(`parson ages are NS : ${parsonages}`);
// by squre brac
console.log(`Accessing object properties using SQUARE Bracket notation`);
const personName = parson["name"];
const personWeght = parson["weight"];
console.log(personName);
console.log(personWeght);

console.log("");
console.log(`---------------------------------------------`);
// adding pro
console.log(`== ADDING AN PROPERY INTO AN OBJECT == `);
parson.company = "Microsoft";
console.log(parson);

console.log("");

console.log(`---------------------------------------------`);
//update
console.log(`== update AN PROPERY INTO AN OBJECT == `);
parson.age = 65;
console.log(parson);

console.log("");
console.log(`---------------------------------------------`);
// deleting pro
console.log(`== deleted AN PROPERY INTO AN OBJECT == `);
delete parson.weight;
console.log(parson);

console.log("");
console.log(`---------------------------------------------`);
console.log(`== add function == `);
//function
let speak = function name(params) {
}
console.log(parson);

console.log("");
console.log(`---------------------------------------------`);
// accessing an function from an object
console.log(`== accessing an function from an object ==`);
parson.speak()  //hey i can spea english and hindi
console.log(parson.speak);//ƒ () {
                         //console.log(`hey i can spea english and hindi`);}



console.log("");
console.log(`---------------------------------------------`);
// function
console.log(` ------`);
parson.walk = function () {
    console.log(`hey i can walk and run man`);
}
console.log(parson);

console.log("");
console.log(`---------------------------------------------`);
console.log(`== add prop into  emity array == `);
const mobile = {  //emity object
}
mobile.company = "micromax";  //add propetty
mobile.camera = "20px";
console.log(mobile);

console.log("");
console.log(`---------------------------------------------`);
// add object
console.log(`--  add another object --`);
const student = {
                    name  : "stew jobs",
                    age   : 50,
                    marks : {  // add another object using :
                                science : 70,  // acess another metod / student.marks["science"]
                                math : 90,
                                english : 87,
                                add : function () {                             //add mode
                                  return  this.science+this.math+this.english;
                                }
                            },
                familyMemberName : [`tony`, `lony`, `Jenny`, `Watigton`]
                }

console.log("");
console.log(`---------------------------------------------`);
//array
console.log(`asessing an array`);
console.log(student.familyMemberName);//(4) ['tony', 'lony', 'Jenny', 'Watigton']

console.log("");
console.log(`---------------------------------------------`);
// add 
console.log(`*Accessing an nested object function`);
const totlaMarks = student.marks.add();
console.log(`toal marks : ${totlaMarks}`);//toal marks : 247

console.log("");
console.log(`---------------------------------------------`);
// access property and value
console.log(`Accessing an nested object property`);
const scienceMark = student.marks.science;
console.log(scienceMark);//70

console.log("");
console.log(`---------------------------------------------`);
console.log(`update an nested object property`);
student.marks.english = 97;

console.log("");
console.log(`---------------------------------------------`);
console.log(`deleting an nested object property`);//*
delete student.marks.math

console.log("");
console.log(`---------------------------------------------`);
console.log(`Adding an nested object property`);
student.marks.programing = 100;
console.log(student.marks);
/*
console.log("");
console.log(`---------------------------------------------`);
const myLaptoop = {
    os : "WIND 11",
    companName : "Asus",
    ram : "8GB",
    color : "blacksilver",
    processor : "AMD3"
}
*/
console.log("");
console.log(`---------------------------------------------`);
console.log(`Object entries`);
const billgates = {
    height : 7,    //key : vlaues
    weight : 70,
    age : 78,
    name : "billgatess",
    company : "Microsoft",
    valuation : "130B $0"

}
console.log("-----------Available AND DELETE-------------");
const isavailabel = "height" in billgates;    //true
console.log(isavailabel);
if (isavailabel) {
    delete billgates.height;// delete height
    console.log(`" height " prpperty is deleted successfully `);// so true threfore this statment show
}else
{
    console.log(`" height " prpperty is not deleted as it is available inside object `);
}

/*   console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));
*/

console.log("-------------------for in loop-----------------------------");

for (const key in billgates) {
    if (Object.hasOwnProperty.call(billgates, key)) {
        const element = billgates[key];
        console.log(key, element);
        
    }
}