console.log(`A & B create a class Bank with data and also create objects`);
class Bank {
    bank_name
    location
    account_no
    ifsc
    interest_rate
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate
    }
}
let axis_bank = new Bank("AXIS","AKOLA",1111,"AXI0011",6);
let sbi_bank = new Bank("SBI","PUNE",2222,"SBI0022",6);
let icici_bank = new Bank("ICICI","MUMBAI",3333,"ICIC0033",5);
let hdfc_bank = new Bank("HDFC","NAGPUR",4444,"HDFC0044",4);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(hdfc_bank);


console.log(" ");
console.log("C.1 Add all Object in a Array ");
const arrayBank = [axis_bank,sbi_bank,icici_bank,hdfc_bank];
console.log(arrayBank);
console.log(`C.2 traverse this array using FOR OF LOOP then just log on console bank name and location`);
for (const element of arrayBank) {
    console.log(element.bank_name);
    console.log(element.location);
     
}

console.log("D. from the array find the object which has name hdfc using for of loop ");
  
for (const obj of arrayBank) {
    if (obj === hdfc_bank){
        result = obj;
        
    }

}
console.log(result); 












