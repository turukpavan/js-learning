class Student{
    constructor(rollNumber,name,division){
        this.rollNumber=rollNumber;
        this.name=name;
        this.division=division;
    }

    getDetail(){
        console.log(`Student Details => RollNumber: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);
    }

    
}

const pavan=new Student(39,'Pavan','A');
pavan.getDetail();
const Akash=new Student(23,'Akash','B');
Akash.getDetail();
const Rahul=new Student(67,'Rahul','C');
Rahul.getDetail();

