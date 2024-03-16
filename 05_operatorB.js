console.log(`=============STEP 1=================`);
function greaterNumber(arg1,arg2) {
    var result= arg1>arg2 ? `${arg1} is greater`: `${arg2} is greater`
    console.log(result);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`=============STEP 2=================`);
function isEvenOrOddNum(arg) {
   var result=arg%2==0 ? `true(given number is even)`:`false(given number is odd)`;
   return result;
    
}
console.log(isEvenOrOddNum(29));
console.log(isEvenOrOddNum(44));
console.log(isEvenOrOddNum(0));
console.log(isEvenOrOddNum(101));


console.log(`=============STEP 3=================`);
function wordLength(word) {
    var wordLength=word.length;
    var result=wordLength%2==0 ? `EVEN`:`ODD`;
    return result;
    
}
console.log(`the length of word "JavaScript" is ${wordLength("JavaScript")}`);
console.log(`the length of word "developer" is ${wordLength("developer")}`);
console.log(`the length of word "Google" is ${wordLength("Google")}`);

