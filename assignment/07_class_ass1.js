console.log(`1> Define a class for Vehicle`);
class Vehicle {
    Brand
    Model
    Color
    Price
    constructor(Brand,Model,Color,Price){
        this.Brand =Brand;
        this.Model=Model;
        this.Color=Color;
        this.Price=Price;
    }
}
let vehHero = new Vehicle("HERO",1111,"Black",1999);
let vehHonda = new Vehicle("HONDA",2222,"White",2899);
console.log(vehHero);
console.log(vehHonda);

console.log(" ");
console.log("---------------------------------------------------------------");
console.log("2> Define a class for Collage with details");
class Collage {
    Name
    Location
    Branches
    Great
    constructor(Name,Location,Branches,Great){
        this.Name=Name;
        this.Location=Location;
        this.Branches=Branches;
        this.Great=Great;
    }
    details (){
        console.log(this.Name,this.Location,this.Branches,this.Great);
    } 
}
let collageSSGM = new Collage("Shri Sant Gajanan Maharaj","Shegaon","EC,Cival,IE","A+");
let collageTTN = new Collage("TTN","Akola","CM,IE,Mechanical","A");
collageSSGM.details();
collageTTN.details();

console.log(" ");
console.log("---------------------------------------------------------------");
console.log("3> Write function with one arg. such that it should traverse the complete given object using for inloop and log the output as console .log(`${key}${element}`) and  call this fun by passing one by one object of college class ==>");
console.log("Ans");

function traverseObject(Collage){
    for (const key in Collage) {
        if (Collage.hasOwnProperty.call(Collage, key)) {
            const element = Collage[key];
            console.log(key,element);
            
        }
    }
}
traverseObject(collageSSGM);
console.log("  ");
traverseObject(collageTTN);


console.log(" ");
console.log("4> WAF to print fibonacci series till 7th occurrence, give a try else will see in session");

let first = 0, second = 1 ,next, count = 7;
console.log(first);
console.log(second);
for (let i = 2; i < count; i++) {  //loop cycle is 5times count 
    let next =first+ second;
    first = second;
    second=next;
    console.log(next);
}


console.log(" ");
console.log("5> Find the given number is prime no or not");
/*
function prime(num) {
    
    if (num===1 || num%2===0) {
        console.log(`${num} = it is prime no `);
    }else{
        console.log(`${num} = it is Not prime no `);
    }

}
prime(11);
prime(12);
prime(1);
prime(0);
*/

function isPrime(num) {
    if (num <= 1) {
        let res = "No Prime Number";
        return res;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            let result = "No Prime Number "
            return result;
        }
    }
    let Result = "Prime Number"
    return Result;
}


console.log("1 : ",isPrime(1));
console.log("2 : ",isPrime(2));
console.log("3 : ",isPrime(3));
console.log("4 : ",isPrime(4));
console.log("5 : ",isPrime(5));
console.log("6 : ",isPrime(6));
console.log("7 : ",isPrime(7));


