
console.log(" ");
console.log("--------------------SET-------------------------");
//SET
// Creating a Set
let mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3);
mySet.add("Hello");
mySet.add("Hello");// adding duplicate element 

//check
console.log(mySet);
/*anthoer method set 
const myArray= new Array(); */

// Checking the size of the Set
console.log(mySet.size);  // Output: 4  bcz Hello is two times but they cont one

// Checking if an element is in the Set
console.log(mySet.has(1));  // Output: true

console.log("delete  ==>");
// Removing an element from the Set
mySet.delete(1);

// Checking the size of the Set after removing an element
console.log(mySet.size);  // Output: 3
const isDeleted99 = mySet.delete(99);//also write 
console.log(`Is 99 deleted ? ${isDeleted99}`);// ans false bcz 99 value not availbale 
/* 
let arrayN = [0,2,6,4,8]
//empty array 2 method
arrayN.length = 0;//length 0 ie emity 1st method
arrayN = []; // assing arrayN to empty [] 
*/ 

// How to clear set
//mySet.clear();
//console.log(mySet);// o/p set(0) {size : 0}

console.log("-------------FOR OF  LOOP----------------");
 //how to traverse set using for of loop
 console.log(`Type of set is : ${typeof mySet}`);// object
 for (const element of mySet) { //for (const anyNameofVarible of objectName)
    console.log(element);
 }

 console.log("--------------Remove duplicates from array------------");
 const arrayNum = [1,2,3,4,1,88,3,2,6];
 const arrayNew = [...new Set(arrayNum)];
 console.log(arrayNew);//[1 2 3 4 88 6]
 let arrayofno = [5,6,4,5,5,6];
 const RemSet = new Set(arrayofno);
 console.log(RemSet);//{}
 const myarray = [...RemSet];
 console.log(myarray);//[]

 class Employee{
    constructor(empID, empName, empAge,empCity){
        this.empID =empID;
        this.empName=empName;
        this.empAge=empAge;
        this.empCity=empCity;
    }
 }
 const empNagesh = new Employee(11,"Nagesh",38,"Akola");
 const empDhir = new Employee(22,"Dhiraj",23,"Pune")
 const empSachin = new Employee(33,"Sachin",24,"Mumbai");
 const empGayatri = new Employee(44,"Gayatri",26,"Nagpur");

 // collection - collection of elemnts
 // elements of datatype - primitive and non primitive (Reference)
 const arrayOfEmployees = [empNagesh, empDhir,empSachin,empGayatri];
 console.log(arrayOfEmployees);//[employee,....]
 // for of loop use for details
 for (const employee of arrayOfEmployees) {
    console.log(`Employee details are : ${employee.empID} ${employee.empName} ${employee.empCity}`);
 }
 const obj = arrayOfEmployees[0];
 console.log(obj);//{nagesh information}
 console.log(obj.empName,obj.empCity);// Nagesh Akola

console.log(`Set ==> `);
const setofEmployees = new Set();
setofEmployees.add(empNagesh);
setofEmployees.add(empDhir);
setofEmployees.add(empSachin);
setofEmployees.add(empGayatri);
console.log(setofEmployees);




















