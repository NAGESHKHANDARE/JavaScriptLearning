
console.log(" ");

// Add function
const marks = {  
             science : 70, 
             math : 90,
             english : 87,
             add : function () {                             
                return  this.science+this.math+this.english;
              }
    }

console.log(marks.add());

console.log(" ");
console.log("--------------------------------------------------");

const person = {
    firstName: "Nagesh",
    lastName: "Khandare",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName());


console.log(" ");
console.log("---------------------A-----------------------------");

// Add Func
person.walk = function () {
    console.log(`hey i can walk and run man`);
}
console.log(person);

console.log(" ");
console.log("-------------------B-------------------------------");
// add fun result
console.log(person.walk());
person.walk();

console.log(" ");
console.log("---------------------C-----------------------------");
let txt = "";
for (let x in person) {
  txt += person[x] + " ";
  
};
console.log(txt);
