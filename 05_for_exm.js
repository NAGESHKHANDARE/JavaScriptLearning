console.log(" FOR =  ");

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// Initialization (let i = 0): This is executed before the first iteration of the loop. It declares a variable i and sets its value to 0.
// Condition (i < 5): This is evaluated before each iteration of the loop. If it returns true, the loop will continue. If it returns false, the loop will exit.
// Update (i++): This is executed after each iteration of the loop. It increments the value of i by 1.



console.log("FOR OF");
// ARRAY
const array = [1, 2, 3, 4, 5];

for (const value of array) {
  console.log(value);
}



console.log("FOR   IN");
//OBJECT
const object = {a: 1, b: 2, c: 3};

for (const key in object) {
  console.log(key, object[key]);
}
