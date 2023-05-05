const employeeNagesh ={
    name : "Nagesh",
    id : 1111,
    age : 26,
    city : "pune"
}

const employeePunam ={
    name : "Punam",
    id : 2222,
    age : 23,
    city : "pune"
}

const employeeSmith ={
    name : "smith",
    id : 3333,
    age : 21,
    city : "pune"
}    
console.log("----------------------------------------------------------------------");
console.log("a=>Calss");
                                   // Alway class name is strating CAPITAL LETTER "E"mplyee
class Emplyee {                    // class is blueprint of object  and class will have data Members ,memberfunction and constructor   and key is class new construcor this details
    constructor(name,id,age,city){  // constructor which is intioalze object
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
     }
     details(){
        console.log(this.name,this.id,this.age,this.city);
     }
}
let empSmit = new Emplyee("smith",33,26,"Delhi");
let empJay = new Emplyee ("Jay",3000,21,"Pune");
let empBill = new Emplyee("Billgates",5000, 58, "USA")


console.log(empSmit);
console.log(empJay);
console.log(empBill.name,empBill.age,empBill.city,empBill.id);

console.log("-----------------------------------------------------------------");
console.log("b=> use details");
empSmit.details();
empJay.details();


console.log("-----------------------------------------------------------------");
// studend
class Studend {
    name
    rollno
    age
    graduation
    constructor(name, rollno, age, graduation){
        this.name= name;
        this.rollno=rollno;
        this.age=age;
        this.graduation;
    }
    details() {console.log(this.name, this.rollno,this.age,this.graduation);}
}
let studNagesh = new Studend("Nagesh", 21, 38," BE EC");
let studMukta = new Studend()


console.log("c=> cheack student-- 'instanceof' use ");
// how to check studNagesh made by which class  bcz no of class studend , employed , techer etc but i dont known stuNagesh which class  
let isstance = studNagesh instanceof Studend;          // true
let isstance1 = studNagesh instanceof Emplyee; 
console.log(isstance);  // true
console.log(isstance1);  // false
console.log(studMukta instanceof Studend);//false