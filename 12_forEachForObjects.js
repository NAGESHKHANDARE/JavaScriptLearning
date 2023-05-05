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

console.log("====less then 150k=====");
arrayofVehicles.forEach(Vehicle=>{
    if(Vehicle.price<150000)
    console.log(Vehicle.model,Vehicle.company,Vehicle.drive,Vehicle.fuel,Vehicle.price);
});


console.log("===== Set of vehicles==========");
const setofVehicles = new Set();
setofVehicles.add(audiA3);
setofVehicles.add(audiQ3);
setofVehicles.add(mahindra);
setofVehicles.add(honda);
setofVehicles.add(hero);

setofVehicles.forEach((itemVehicle)=>{
    console.log(itemVehicle.model);
})

console.log("======Map of Vehicles ============");
let mapofVehicles = new Map();
mapofVehicles.set("Reg_11",audiA3);
mapofVehicles.set("Reg_22",audiQ3);
mapofVehicles.set("Reg_33",mahindra);
mapofVehicles.set("Reg_44",honda);
mapofVehicles.set("Reg_55",hero);

mapofVehicles.forEach((VehicleObject, regNo)=>{
    console.log(VehicleObject.model,regNo);
});





