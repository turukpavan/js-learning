const arrayNumbers=[20,31,40,25,23,11,29,9,60,22,11];
console.log('=====================STEP 1============================');
var arrLength=arrayNumbers.length;
console.log(`Length of an array : ${arrLength}`);
console.log('=====================STEP 2============================');
console.log(`First element of array :${arrayNumbers[0]}`);
console.log(`Last element of array :${arrayNumbers[arrayNumbers.length-1]}`);
console.log('=====================STEP 3============================');
console.log(`Third last element using Length prop : ${arrayNumbers[arrayNumbers.length-3]}`);
console.log('=====================STEP 4============================');
console.log(`All even numbers from an array`);
for (const iterator of arrayNumbers) {
    if (iterator%2==0) {
        console.log(iterator);
    }
}
console.log('=====================STEP 5============================');
console.log(`All odd numbers from an array`);
for (const iterator of arrayNumbers) {
    if (iterator%2!==0) {
        console.log(iterator);
    }
}
console.log('=====================STEP 6============================');
console.log(`sum of All even positioned elements from arrayNumbers`);
let sumEven=0;
for (const key in arrayNumbers) {
    if (key%2==0) {
        sumEven=sumEven+arrayNumbers[key]
    }
}
console.log(sumEven);
console.log('=====================STEP 7============================');
console.log(`Sum of All odd positioned elements from arrayNumbers`);
    var sumOdd=0
for (const key in arrayNumbers) {
    if (key%2!==0) {
        sumOdd=sumOdd+ arrayNumbers[key];
    }
}
console.log(sumOdd);
console.log('=====================STEP 8============================');
console.log(`Sum of All elements from arrayNumbers`);
    var sumOfAll=0
for (const key in arrayNumbers) {
        sumOfAll=sumOfAll+ arrayNumbers[key]; 
}
console.log(sumOfAll);
console.log('=====================STEP 9============================');
console.log(`numbers which is multiple of 5`);
for (const iterator of arrayNumbers) {
    if (iterator%5==0) {
        console.log(iterator);
    }
}
console.log('=====================STEP 10============================');
console.log(`is number 115 available in arrayNumbers ?`);
console.log(arrayNumbers.includes(115));
console.log('=====================STEP 11============================');
console.log(`is number 23 available in arrayNumbers ?`);
console.log(arrayNumbers.includes(23));
console.log('=====================STEP 12============================');
console.log(`Array after inserting 55,66 at index 3`);
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);
console.log('=====================STEP 12============================');
console.log(`Array after deleting 3 element starting from index 4`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);

