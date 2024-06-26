class Employee{
    constructor(emp_id,emp_name,emp_dpt,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dpt=emp_dpt;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    emp_details(){
        console.log(`Name=>${this.emp_name},\nId=>${this.emp_id},\nDepartment=>${this.emp_dpt},\nSalary=>${this.emp_salary},\nCompany=>${this.emp_company}`);
    }
}

const emp_anil =new Employee(22,"Anil","IT",50000 ,"TCS");
const emp_radha =new Employee(33,"Radha","HR",74000 ,"Wipro");
const emp_rishi =new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali =new Employee(66,"Sonali","Finance",45000 ,"Infy");
const emp_monika =new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny =new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi =new Employee(99,"Mahesh","HR",85000 ,"Infy");

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`=================Step 1====================`);
arrayEmployees.forEach((el)=>{
        //this  is new method like if condition -->
        el.emp_company=="TCS" && console.log(`name and Company of Employee=>${el.emp_name},${el.emp_company}`)
    })

console.log(`=================Step 2====================`);
    arrayEmployees.forEach((el)=>{
        if (el.emp_dpt=="Finance") {
            console.log(`Department and name of employee :${el.emp_dpt},${el.emp_name}`);
        }
    })

console.log(`=================Step 3====================`);
console.log(`here is the details of employees whose name start with "R" `);

        arrayEmployees.forEach((el)=>{
                if (el.emp_name.startsWith('R')) {
                    console.log(`************`);
                    el.emp_details();
                }
        })

console.log(`=================Step 4====================`);
            console.log(`employee whose salary is greater than 75000`);
        arrayEmployees.forEach((el)=>{
            if(el.emp_salary>75000){
                console.log(`Name=>${el.emp_name},\nCompany=>${el.emp_company},\nSalary=>${el.emp_salary}`);
            }
        })
console.log(`=================Step 5====================`);
console.log(`employee whose salary is greater than or equal to 50000`);
arrayEmployees.forEach((el)=>{
    if(el.emp_salary>=50000 && el.emp_dpt=="IT"){
        console.log(`***********`);
        el.emp_details();
    }
})

console.log(`=================Step 6====================`);
console.log(`All the employees from company "Infy"`);
arrayEmployees.forEach((el)=>{
    if(el.emp_company=="Infy"){
        console.log(`**********`);
        el.emp_details();
    }
})