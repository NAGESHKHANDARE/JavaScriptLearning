const parson = {
    propety  : "value",
    name     : "Nagesh",
    lastName : "Khandare",
    age      : 38,
    marriage : true,
    gender   : "male",
    marks    : {  // add another object using :
               science : 70,  // acess another metod / student.marks["science"]
               math : 90,
               english : 87,
               add : function () {   // Add function                          
                           return  this.science+this.math+this.english;
                                 }
                },
    speak     : function(){
        console.log("if call speak then me exucted");
    },
    fullName  : function() {
        return this.name + " " + this.lastName;
      },
    array : [11, "apple", "avinash"] 
};



console.log(parson);
console.log(" ");
console.log("--------------for in---------------------");
console.log("1.a=> ");
for (const key in parson){//************** FOR IN
    if (Object.hasOwnProperty.call(parson,key)){
        const element = parson[key];
        console.log(key, element);
    }
};

console.log("1.b=> ");
for (let prop in parson) {
    console.log(prop + ': ' + parson[prop]);
  }

console.log(" ");
console.log("--------------Availabe or not---------------------");
console.log("2=> ");
const isavailabel = "marriage" in parson;    //true  ***********
console.log(isavailabel);

if (isavailabel) {
    delete parson.marriage;// delete marriage
    console.log(`" marriage " prpperty is deleted successfully `);// so true threfore this statment show
}else
{
    console.log(`" marriage " prpperty is not deleted as it is available inside object `);
};


console.log(" ");
console.log("--------------Propety---------------------");
console.log("3=> ");
console.log(parson.age);//38  dot method
console.log(parson["age"]);//38  squre method
console.log("3.a=>add company");
parson.company = "TCS";//comany : "TCS"
console.log("3.b=>update age 40");
parson.age = 40;// 38 --->40
console.log("3.Ans for add and update check");
console.log(parson);
console.log("3.c=>call function");
parson.speak();
console.log("3.d=>add function");
parson.funadd = function(){
    console.log("Hi i am extra function added");
};
parson.funadd();//fun exuted
console.log("3.e=>Nested obj fun");
const totalMark = parson.marks.add();//bcz return
console.log("total mark bez return=>",totalMark);
console.log("3.f=> fun full name");
parson.fullName();//call fun
console.log("3.g=> empty obje");
const mobile = {};
mobile.name = "apple";
mobile.price = 2500;
console.log(mobile);
console.log("3.h=> Freeze");
Object.freeze(mobile)//object freeze ie no update/change



console.log(" ");
console.log("-----------------------------------------");
console.log("+=  -- >    v=v+n  =  v +=n");
let x = 5;
x += 3;
console.log(x); // output: 8

let message = "Hello";
message += " World";
console.log(message); // output: "Hello World"

let txt = "";
for (let x in parson) {
  txt += parson[x] + " ";
  
};
console.log(txt); 
  
  


console.log(" ");
console.log("---------------------------------------------");
console.log("1. Deep clone always performed on primitive data type");

// 1. Deep clone always performed on primitive data type

let anil = {
    age : 23,
    name : "Anil",
    company : "Microsoft"
}

let sunil ={
    age : 26,
    name : "Sunil",
    company : "Google"
}
anil =sunil;  //shallow cloning it is use "=" equal singe  ^^^^^^^^^
sunil.country = "India";
console.log("sunil ", sunil);//sunil  {age: 26, name: 'Sunil', company: 'Google', country: 'India'}
console.log("Anil ",anil);//Anil  {age: 26, name: 'Sunil', company: 'Google', country: 'India'}


console.log("---------------------------------------------");
console.log(" 2. Deep clone using Spread Operator ...")
// 2. Deep clone using Spread Operator ...
// disAdv is it is not use nasted object(object made object)
let empSumit = {
    empName : "Sumit",
    empSalary : "70k"
}
let empMohit = {... empSumit};
empMohit.empName = "Mohit";
empMohit.company="Ncom";
console.log(empSumit);//{empName: 'Sumit', empSalary: '70k'}
console.log(empMohit);//{empName: 'Mohit', empSalary: '70k', company: 'Ncom'}


console.log("---------------------------------------------");
console.log("3. Deep cloning using JSON(JavaScript Object Notation)")
// 3. Deep cloning using JSON(JavaScript Object Notation) 
// use for nested object
const empStew ={
    name : "Stew Jobs",
    age : 50,
    marks : {
        scince : 70,
        maths : 80
    }
}

let empBill = JSON.parse(JSON.stringify(empStew));   // ********

empBill.name = "Bill Gate";
empBill.marks.scince = 90;
console.log(empStew);
console.log(empBill);
console.log(empStew.marks.scince);//70
console.log(empBill.marks.scince);//90
for (const element in empBill){                              //***************** 
    console.log(element," = ",empBill[element]);
};

