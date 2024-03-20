
var word="JavaScript";
for (let index = 0; index < word.length; index++) {
    var element = word.charAt(index);
    console.log(element);
    
}
console.log("WAP to count the char a");
var word="JavaScript";
var count=0;
for (let index = 0; index < word.length; index++) {
    var element = word.charAt(index);
    if (element=="a") {
        count++;
    }
    
}
console.log(`char a count is : ${count}`);
