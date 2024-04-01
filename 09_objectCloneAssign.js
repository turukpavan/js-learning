console.log(`=================STEP 1===================`);
const bankSbi={
    bankName:'SBI',
    branch:'Amravati',
    IFCE:'SBIN00056',
    openingTime:'10:30AM to 5PM'
}
console.log(bankSbi);

console.log(`=================STEP 2===================`);
const bankLocation={
    street:'Main Street',
    city:'Amravati',
    pin:444701,
}
console.log(bankLocation);

console.log(`=================STEP 3===================`);
console.log(`After combined two different object we get one new single one object`);
let bankSbiAndBankLocation=Object.assign(bankSbi,bankLocation);
console.table(bankSbiAndBankLocation);

console.log(`=================STEP 4===================`);
const rateOfInterest={
    homeLoanInterest:10.3,
    personalLoanInterest:8.5,
    dueInterest:2.5,
}
console.log(rateOfInterest);

console.log(`=================STEP 5===================`);
console.log(`After merging step1, step2, step3`);
const sbiDetails=Object.assign(bankSbi,bankLocation,rateOfInterest);
console.log(`=================STEP 6===================`);
console.log(`Traversing merged object`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}    : ${element}`);
    }
}



