// Write a program for count the spaces
function spaceCount(str) {
    let count=0;
    for (const iterator of str) {
        if (iterator==" ") {
            count++
        }
        
    }
    
    return count;
    
}
console.log(`Spaces in "Revision is the mother of success" => ${spaceCount("Revision is the mother of success")}`);
console.log(`Spaces in "Java Script is the language of internate word" => ${spaceCount("Java Script is the language of internate word")}`);