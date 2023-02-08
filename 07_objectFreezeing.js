//object

let student = {
    name : "Nagesh",
    rollNo : 21 
}

Object.freeze(student)//object freeze ie no update/change
student.name ="Nagesh Khandare";
student.city = "Akola";
console.log(student);

//Array
/*
let array = [2, 3, 4, 5];
Object.freeze(array);
array.push(6);//error
array.shift();//error

*/