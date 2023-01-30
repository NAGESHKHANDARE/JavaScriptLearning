console.log(" 1. Think of all the propeties that you could add");
console.log(" ");
console.log("2. Also include nested object 'degrees' like engineering : CSC , PHD: Adv computing and few more");
console.log(" ");
console.log("3. Also add one more nested object  Certificates with his certificates like Hacker Rank participation , certiicate in IFE course Certificates in Adv programming");

professor = {
    subject : "maths",
    Language : "English",
    Salary : 1500,
    qulification : "ME",
    Degrees :   {
        Course : "Softwar course",
        Degrees : "CSC",
        PHD : "Adv Computing "
    },   
    Certificate : ["Hacker Rank Participation", "IFE course", "Adv Programming"]
}
console.log(professor);

console.log(" ");/*
console.log("4. add function as a valve which should concat all degrees in step 2 , please return as string and log on console with - Teacher degrees are total degrees are");
console.log(`Teacher total degrees are`);
*/

console.log(" ");
console.log("5. try tto add new property and log on console");
professor.Degrees.PG = "ME";
console.log(professor);

console.log(" ");
console.log("6. Modify any existing property and log complete object on console ");
professor.Degrees.PG = "MTech";
console.log(professor);

console.log(" ");
console.log("7. Delete any one certificate from nested objedct");
delete professor.Degrees.PG;
console.log(professor);

console.log( " ");
console.log(" 8. Add new degree in nested object ");
professor.Degrees.PG = "M Tech";
console.log(professor);

console.log(" ");
console.log("9. Log the nested object certificate on console");
let cert = professor.Certificate;
console.log(cert);

