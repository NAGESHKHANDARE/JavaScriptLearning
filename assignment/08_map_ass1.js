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

console.log("C. Create a Map in such way that key should be accountNo and value is object that is crated in step B");
console.log("D. traverse the map, log bankName, accpmtNo and iterestRate for each object");
const bankMap = new Map();
bankMap.set(axis_bank.account_no, axis_bank);
bankMap.set(sbi_bank.account_no, sbi_bank);
bankMap.set(icici_bank.account_no, icici_bank);
bankMap.set(hdfc_bank.account_no, hdfc_bank);

const keyOfBankMap = bankMap.keys();
console.log(keyOfBankMap);
for (const key of keyOfBankMap) {
    const bank = bankMap.get(key);
    console.log(bank.bank_name, bank.account_no, bank.interest_rate);
}













