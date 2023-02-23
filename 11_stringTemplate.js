//  back tik = ` `  and spread operator feture of esco  

const fullName  = "Sachin Tendulkar";
const age = 45;
const city = "Mumbai";


let details  = "DetailsDotConcat  ".concat(fullName).concat(" ").concat(age).concat(" ").concat(city)
let detailsUsingPlus = "DetailsPlus "+fullName+" "+ age+ " "+ city;
console.log(details);
console.log(detailsUsingPlus);

let detailsUsingTemplate = `DtailsTemplate ${fullName}  ${age}  ${city}`;
console.log(detailsUsingTemplate);

