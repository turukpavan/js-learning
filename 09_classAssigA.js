console.log(`================STEP 1====================`);
class Vehicle{
    constructor(name,company,type,milage,price){
        this.name=name;
        this.company=company;
        this.type=type;
        this.milage=milage;
        this.price=price;
    }
    details(){
        console.log(`Vehicle Details => name:${this.name}, company:${this.company} type :${this.type}, milage :${this.milage}, price : ${this.price}`);
    }
}

const obj1=new Vehicle("FZ","Yamaha","motorcycle",49.9,100000);
const obj2=new Vehicle("Duster","Renault India","car",18.5,1500000);
const obj3=new Vehicle("Activa","Honda","scooter",40,80000);
const obj4=new Vehicle("Shine","Honda","motorcycle",50,110000);
const obj5=new Vehicle("swift","Maruti Suzuki","car",20,800000);

const arrayOfVehicles=[obj1,obj2,obj3,obj4,obj5];

for (const iterator of arrayOfVehicles) {
    iterator.details();
}

console.log(`=====================STEP 2=====================`);
class College{
    constructor(name,location,course,studentStrength){
        this.name=name;
        this.location=location;
        this.course=course;
        this.studentStrength=studentStrength;

    }
    display(){
        console.log(`college details => Name:${this.name} Location:${this.location} Course:${this.course} Student Strength:${this.studentStrength} `);
    }
}

const clg1=new College('shree Shivaji Science College','Amravati','BCA',50000);
const clg2=new College('VidhyaBharti','Amravati','Bsc',70000);
const clg3=new College('Sipna College of Engineering','Amravati','Engineering',60000);
const clg4=new College('Pote college ','Amravati','Hotel Management',30000);

clg1.display();
clg2.display();
clg3.display();
clg4.display();



