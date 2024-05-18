let array=[2,4,1,7,9,8]
array.forEach((element,index,arr)=>{
console.log(element, index ,arr);
})

console.log(`=== forEach using mandatory arguments===`);
array.forEach((element)=>{
    console.log(element);
    })

    console.log(`==== forEach to even numbers =====`);
array.forEach(element => {
    if(element%2==0){
        console.log(element);
    }
});