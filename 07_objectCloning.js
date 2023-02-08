
let myName = "Nagesh";
let yourName = "Mukta";

myName=yourName;// Deep clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);




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
anil =sunil;  //shallow cloning
sunil.country = "India";
console.log("sunil ", sunil);
console.log("Anil ",anil);



//Spread Operator
let empSumit = {
    empName : "Sumit",
    empSalary : "70k"
}
// ... Spread operator



