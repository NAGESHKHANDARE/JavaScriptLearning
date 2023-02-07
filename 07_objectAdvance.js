const interestRate = 7.5;
// interestRate = 8.6;   --- not posible bcz cost varibla not update


const billgates = {           // not premter object OR refer object
    height : 7,    //key : vlaues
    weight : 70,
    age : 78,
    name : "billgatess",
    company : "Microsoft",
    valuation : "130B $0"

}
billgates.city = "Pune";    // add key : value  OR new property
billgates.valuation = "180B $";  // update value
console.log(billgates); // ans {  } bracet