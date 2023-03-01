

console.log("========= map() ========");
const arrayofnumber = [0, 2, 3, 5, 6];

//[10, 12, 13, 15, 16]
const arrayTransform = arrayofnumber.map((currentValue)=>{
    console.log(currentValue);
    return currentValue + 10;
    // or  return (`${currentValue} + 10 = ${currentValue + 10}`)
})
console.log(arrayTransform);


const arrayofSquare = arrayofnumber.map((currentValue)=>{
   return currentValue * currentValue;
})
console.log(arrayofSquare);
//or
const arrayofSquare1 = arrayofnumber.map(currentValue=> currentValue * currentValue );
 console.log(arrayofSquare1);

 

 // value in array update or change
 console.log("value in array update or change");
 class Vehicle {
    constructor(company, model, fuel, drive, price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}

let audiA3  = new Vehicle("Audi","A3","Petrol","foru wheel Drive",8000000 );
let audiQ3  = new Vehicle("Audi","Q3","Diseal","Two wheel drive",4900000 );
let mahindra = new Vehicle("Mahindra","Thao","Petrol","Four wheel Drive",125000 );
let honda = new Vehicle("Honda","Unicorn","Petrol","Two wheelar",125000 );
let  hero = new Vehicle("Hero","Splender","Petrol","Two wheeler",85000 );
const arrayofVehicles = [audiA3,audiQ3,mahindra,honda,hero];


const arrayofupdatePV = arrayofVehicles.map((Vehicle)=>{ //PV =price update
Vehicle.price = Vehicle.price - 10000;// update price of vehicle for each by 10k
return Vehicle;
});
console.log(arrayofupdatePV);// not expand   ------

arrayofupdatePV.forEach((vehicle)=>{
    console.log("---");
    console.log(vehicle.model, vehicle.price);
    console.log("===");   //-----
    console.log(vehicle);                    //-----
})


//add index value in current value
const arrayofnum = [0, 2, 3, 5, 6];
const arrayVI = arrayofnum.map((value,index,array)=>{
    return value + index
})
console.log(arrayVI);









































/*
//OR  for each method
console.log("=========forEach method=========");
const arrayOf = [];//extra array made in foreach method
arrayofnumber.forEach((currentValue2)=>{
  //console.log(currentValue2);
  arrayOf.push(currentValue2 + 10)// push cv+10 in array arrayof
})
console.log(arrayOf);
*/







