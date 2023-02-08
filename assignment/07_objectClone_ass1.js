console.log("1. Perform shallow clone and update vlues using push() ");

const arryNums = [20, 3, 4, 56, 90, 400, 49];
console.log(arryNums);
let arrayShallow=arryNums;//shallow clone
console.log(arrayShallow);
arryNums.push(55,66);
console.log(arryNums);
console.log(arrayShallow);


console.log(" ");


console.log("2. Perform deep clone using spread operator and update 10,25 last" );
let arraydso = [...arryNums];
arraydso.push(10,25);
console.log(arryNums);
console.log(arraydso);


console.log(" ");


console.log("3. Marge array using Spread operator ");
let arrayEven =[2, 30, 14, 8];
let arrayNums=[...arryNums,...arrayEven];
console.log(arryNums);
console.log(arrayEven);
console.log(arrayNums);


console.log(" ");



console.log("4. Employee Details");

const employee_info ={
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
                july_month : "40,0000INR",
                aug_month : "50,0000INR",
                jun_month : "65,0000INR"
            },
    address : {
                locality : {
                    colony : "OM Vrindavan Society",
                    street : "Kanch Pokli, 431202"
                },
            city : "Mumbai",
            state : "Maharashtra",
            country : "India"
    },
    mobiles : ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"]
}

console.log(" ");
console.log("5-a. log address:locality, city, state and country ");
//for(const element of employee_info.address.locality ){console.log(element);};  ---- > not use
console.log(employee_info.address.locality);
console.log(`${employee_info.emp_name} address is ${employee_info.address}`);
console.log(`${employee_info.emp_name} city is ${employee_info.address.city}`);
console.log(`${employee_info.emp_name} state is ${employee_info.address.state}`);
console.log(`${employee_info.emp_name} country is ${employee_info.address.country}`);

console.log(" ");
console.log("5-b. mobile number");
console.log(`${employee_info.emp_name} mobile number are ${employee_info.mobiles}`);
console.log(`${employee_info.emp_name} mobile number are ${employee_info.mobiles[0]}, ${employee_info.mobiles[1]}, ${employee_info.mobiles[2]}`);


console.log(" ");
console.log("6. perform deep copyu using JSON.stringfy");
let jsoncopy = JSON.parse(JSON.stringify(employee_info));//deep clone using JSON


console.log("6-a. update july mont salary to 80k on cloned object");
jsoncopy.salary.july_month="80,0000INR";
console.log("Old salary :",employee_info.salary.july_month);// 40K
console.log("update clonedobject salary : ",jsoncopy.salary.july_month);//80K

console.log(" ");
console.log("6-b. update propety country to 'UK' on orignal object");
employee_info.address.country="United Kingdom";
console.log("old object update country : ",employee_info.address.country);














