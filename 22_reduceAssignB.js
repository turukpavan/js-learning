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

console.log(`=====Step 1=====`);
console.log(`All employees from Wipro`);
arrayEmployees.filter((element)=>{
    return element.emp_company=="Wipro";
}).forEach((el)=>{
    console.log(el.emp_name);
});


console.log(`=====Step 2=====`);
console.log(`All employees from 'IT' and 'HR' company`);
arrayEmployees.filter(element=>element.emp_dpt=="IT" || element.emp_dpt=="HR" ).forEach(el=>console.log(el.emp_name));

console.log(`=====Step 3=====`);
console.log(`All the employees whose emp id's are greater than 50`);
arrayEmployees.filter(emp=>emp.emp_id>50).forEach(emp=>console.log(emp.emp_name));

console.log(`======Step 4=====`);
console.log(`All employees whose name start with letter "A" or "V" or "M"`);
arrayEmployees.filter(emp=>emp.emp_name.startsWith("A")||emp.emp_name.startsWith("V")||emp.emp_name.startsWith("M")).forEach(emp=>console.log(emp.emp_name));

console.log(`======Step 5=====`);
console.log(`Average salary of the employees for all department`);
const sumSalary = arrayEmployees.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
    let avg=sumSalary/arrayEmployees.length;
    console.log(avg);


    console.log(`======Step 6=====`);
    console.log(`Average salary of IT employees `);
    const arrayITEmployees=arrayEmployees.filter(emp=>emp.emp_dpt=='IT')
    const sumOfITSalary=arrayITEmployees.reduce((acc,currentValue)=>{return acc+currentValue.emp_salary},0)

    let avgITSalary=sumOfITSalary/arrayITEmployees.length;
    console.log(avgITSalary);
