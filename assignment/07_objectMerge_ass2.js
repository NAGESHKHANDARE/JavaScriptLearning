const car = {
    carName  : "Creta SX",
    company : "Hundai",
    launchYear : 2017
}
const CarEngine = {
    enginePower : "1499CC",
    maxPower : "113 BHP"
}
let spread = {...car, ...CarEngine}
console.log(spread);

console.log(" ");
console.log("---------------------------object.assign()----------------------------------------");
Object.assign(car,CarEngine)// object.assign(target, source)
console.log(car);//log.console(target)

console.log(" ");
let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }

console.log(" ");
console.log("----------------------clon object using object.assign() -----------------------");
const emp = {
    emp_name : "Anil",
    company : "TCS"
}
const cloned_emp = Object.assign({},emp);
console.log(emp);//orignal
cloned_emp.state="MH";
console.log(cloned_emp);// clone update





