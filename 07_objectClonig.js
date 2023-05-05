console.log("hi");


let myName = "Nagesh";
let yourName = "Mukta";

myName=yourName;// Deep clone always performed on primitive data type

console.log(myName);//mukta
console.log(yourName);//mukta

yourName = "Jenifer";
console.log(myName);//mukta
console.log(yourName);// jenifer


console.log(" ");
console.log("----------------A-------------------- ");



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
console.log("sunil ", sunil);
console.log("Anil ",anil);

console.log(" ");
console.log("---------------------------B--------------------------------");


// 1. Deep clone using Spread Operator ...
// disAdv is it is not use nasted object(object made object)
let empSumit = {
    empName : "Sumit",
    empSalary : "70k"
}
// ... Spread operator
//console.log(empSumit);
//console.log({... empSumit});
let empMohit = {... empSumit};//Deep cloning using spread operor {... }
empMohit.empName = "Mohit"; // change empName Mohit ie use sumit property
empMohit.company="Ncom";// update seprately not effect sumit object vice varsa
console.log(empSumit);
console.log(empMohit);



console.log(" ");
console.log("--------------------------C---------------------------------");


// 2. Deep cloning using JSON(JavaScript Object Notation) 
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
console.log(empStew.marks.scince);
console.log(empBill.marks.scince);