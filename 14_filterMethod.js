const arrayofnumber = [0, 2, 3, 20, 10, 5, 6];
const arrayFG5 = arrayofnumber.filter((currentValue)=>{
    return currentValue > 5;
});
console.log(arrayFG5);

const arrayEven = arrayofnumber.filter((currentValue,index,array)=>{
    return currentValue %2 == 0;
});
console.log(arrayEven);

console.log("                            ----                  ");

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

console.log("=======filter out vehicles whose prices are greater than 2,00,000=====");

const arrayFilterV = arrayofVehicles.filter((vehicle)=>{
    return vehicle.price > 200000;
});


arrayFilterV.forEach((element)=>{
    return console.log(element.model, element.price);
});





