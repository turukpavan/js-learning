const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`========Step 1=========`);
console.log(`Adding 10 to each element using map()`);
    const add10EachElement=arrayNumbers.map((el)=>{
            return el+10;
    })
    console.log(add10EachElement);

console.log(`========Step 2=========`);
console.log(`cube of each element using map()`);
const cubeOfEl=arrayNumbers.map((el)=>{
        return el*el*el;
})
console.log(cubeOfEl);
console.log(`========Step 3=========`);
console.log(`Adding index value into corresponding each element`);
const addingIndex=arrayNumbers.map((el,index)=>{
    return el+index;
})
console.log(addingIndex);