const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`==== Even index elements =======`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
    
    
}