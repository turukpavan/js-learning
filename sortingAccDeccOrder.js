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


console.log(`===============Step 1=====================`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_id>=p2.emp_id ? -1 : 1
});

arrayEmployees.forEach((element)=>{
    console.log(`Employee Id=> ${element.emp_id} Employee Name=>${element.emp_name} Employee Department =>${element.emp_dpt}`);
})

console.log(`===============Step 2=====================`);

arrayEmployees.sort((p1, p2)=>{
    return p1.emp_dpt>=p2.emp_dpt ? 1 : -1
});

arrayEmployees.forEach((element)=>{
    console.log(`Employee Id=> ${element.emp_id} Employee Department=>${element.emp_dpt} Employee company =>${element.emp_company}`);
})


console.log(`===============Step 3=====================`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_salary>=p2.emp_salary ? -1 : 1
});

arrayEmployees.forEach((element)=>{
    console.log(`Employee Salary=> ${element.emp_salary} Employee Name=>${element.emp_name} Employee Company =>${element.emp_company}`);
})

