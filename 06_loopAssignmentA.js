console.log(`==============STEP 1===================`);
let string="I am very good IT Developer"
let vowel="aeiou";
let count=0;
for (let i = 0; i < string.length-1; i++) {
    let lowerCaseStr=string[i].toLowerCase();
    if (vowel.includes(lowerCaseStr) && lowerCaseStr!==" ") {
        count++;
    }
    
}
console.log(count);

console.log(`================STEP 2=====================`);
function sumOfCube() {
    let sum=0;
    for (let i = 1; i < 6; i++) {
      sum=sum+i*i*i;  
        
    }
    return sum;
}
console.log(sumOfCube());

console.log(`===============STEP 3=====================`);
function oddPositionedChars(str) {
  for (let i = 0; i < str.length; i++) {
    if (i%2!==0 && str[i]!==" ") {
        console.log(str[i]);
    }
    
  }
}
console.log(`================function call of string 1================`);
oddPositionedChars("Hard work always pays back");
console.log(`================function call of string 2================`);
oddPositionedChars("Soon I will be UI IT Champ");

