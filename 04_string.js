// console.log(`========== trim() ==================`);
// var greet = "   Good Morning   ";
// var lengthBeforeTrim = greet.length;
// console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

// var greetAfterTrim = greet.trim();
// var lengthAfterTrim = greetAfterTrim.length;
// console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);
// console.log(`total spaces removed is :${lengthBeforeTrim-lengthAfterTrim}`);
// console.log(`========== includes() ==================`);
// var greet = "Good Morning";
// var result = greet.includes("nin");
// console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

// var result = greet.includes("MoR");
// console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);
// console.log(`========== search() ==================`);
// var greet = "Good Morning";
// var result = greet.search("Morning");
// console.log(`'Morning' is available at ${result}`);

// var result = greet.search("r");
// console.log(`'r' is available at ${result}`);
// console.log(`========== slice() ==================`);
// var greet = "Good Morning";
// var result = greet.slice(3, 10);
// console.log(`Slice is ${result}`);
// console.log(`========== split() ==================`);
// var greet = "Good Morning";
// var resultValue = greet.split(" ")
// console.log(resultValue);
// console.log(`Total words are: ${resultValue.length}`);


function totalWorld(arg1) {
    var result=arg1.split(" ");
    return result.length
   

}
totalWorld('I am happy Buddy');
totalWorld("I am learning JS the language of internet");