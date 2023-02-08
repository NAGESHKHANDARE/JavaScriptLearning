/* class Studend {
    name
    rollno                  // ---> all data member
    age
    graduation
    constructor(name, rollno, age, graduation){
        this.name= name;
        this.rollno=rollno;
        this.age=age;
        this.graduation;
    }
}
*/

// old method befor class for object
function Studend(name, rollno, age){
this.name=name;
this.rollno=rollno;
this.age=age;
}

Studend.prototype.country = "India"; // it is add one propety in prototype not in fun object 

let s1 = new Studend("nagesh",21,38);
let s2 = new Studend("Mukta",12,27);
let s3 = new Studend("Athrav",11,2);


console.log(s1);// show all propety but not show india
console.log(s2);
console.log(s3);
console.log(s1.age);
console.log(s1.country);// but show india
console.log(s2.country);
console.log(s3.country);


// property or key is availbty check using IN opertor




// objet pre define
let date = new Date();
let mounth = date.getMonth();// one month mince
let year = date.getFullYear();
let day = date.getDay(); // today day no show like somvar 1 and maglwal 2 ...
console.log(mounth, year, day);


let sqrt = Math.sqrt(25);
let power = Math.pow(2, 3);  // 2*2*2*
let pi = Math.PI;
console.log(sqrt,power,pi);

