const professor={
    name:'Pavan',
    DOB:'01/02/03',
    clgName:'hvpm',
    address:'Amravati',
    pin:444701,
    degrees:{
        engineering:'CSC',
        PHD:'Adv Computing',
        graduation:'BCA',
        PostGraduation:'MCA',
        
    },
    certificates:['Hacker Rank Participation','Certificates in IFE Course','Certificate in Adv Programming'],
}
console.log('===========adding new property=============');
professor.totalExperience='14 years';
console.log(professor);
console.log('===========modifying any existing Property=============');
professor.address='Akola';
console.log(professor);
console.log('===========adding new certificate=============');
professor.certificates.splice(2,0,'Oracle Certified');
console.log(professor);
console.log('===========last element of  array=============');
let lastEl=professor.certificates[professor.certificates.length-1];
console.log(lastEl);
console.log('===========complete object=============');
console.log(professor);
console.log('===========traversing Array =============');
for (const iterator of professor.certificates) {
    console.log(iterator);
}


