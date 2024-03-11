
console.log('===========STEP 1==============');
function sampleMsg1(){
    console.log('Hi I am Pavan');
}
function sampleMsg2() {
    console.log('And I am learning JS from CODEMIND technology');
}
sampleMsg1();
sampleMsg2();
console.log('===========STEP 2==============');
function personalDetails(firstName,lastName,collegeName) {
    console.log('First Name :',firstName);
    console.log('Last Name :',lastName);
    console.log('College Name :',collegeName);
}
personalDetails('Pavan','Turuk','HVPM Amravati')

console.log('===========STEP 3==============');
function swapValues(n1,n2) {
    console.log(" swap variable values using third variable");
console.log("=============Before Swap=============");
console.log("n1:",n1,"n2:",n2);

console.log("=============After Swap=============");
var temp=n1;
n1=n2;
n2=temp;
console.log("n1:",n1,"n2:",n2);
}
swapValues('virat','Anushka');
swapValues(1000,2000);

console.log('===========STEP 4==============');
function addThreeValues(val1,val2,val3) {
    let sum=val1+val2+val3;
    console.log('sum of values :',sum)
}
addThreeValues(10.23,600,40);
addThreeValues('hello ','Good ','Morning')
