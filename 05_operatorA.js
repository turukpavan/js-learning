console.log(`===============STEP 1==================`);
function squareOfWordLength(arg1) {
    var result=arg1.length;
    return result*result;
}

console.log(`Length Square of JavaScript is : ${squareOfWordLength("JavaScript")}`);
console.log(`Length Square of "Google Chrome" is : ${squareOfWordLength("Google Chrome")}`);
console.log(`Length Square of "Developer Smart" is : ${squareOfWordLength("Developer Smart")}`);

console.log(`===============STEP 2==================`);
function divideByTotalWord() {
    var str="I am Angular Developer";
    var strLength=str.length;
    var newStr=str.split(" ");
    var newStrLength =newStr.length;
    var div=strLength/newStrLength;
    var mul=strLength*newStrLength
    console.log(`String length when divide by total number of words : ${div}`);
    console.log(`String length when multiply with total number of words : ${mul}`);

}
divideByTotalWord();