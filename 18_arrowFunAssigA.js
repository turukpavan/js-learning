console.log(`================STEP 1=====================`);
let messages=()=>console.log(`Good Afternoon,Today is Monday`);
messages();

let mul=(arg1,arg2,arg3=1)=> console.log(`multiplications of ${arg1},${arg2},${arg3} : ${arg1*arg2*arg3}`);
console.log(`================STEP 2.a=====================`);
mul(5,5,2);
console.log(`================STEP 2.b=====================`);
mul(10,4);

console.log(`================STEP 3.a=====================`);
//using arrow function and reduce method 
let add=(...args)=>args.reduce((acc,current)=>acc+current);
// or using only arrow  function 
// var add=(arg1,arg2,arg3,arg4,arg5)=>{
//     let sum=arg1+arg2+arg3+arg4+arg5
//     return sum;
// }

// var add=(...args)=>{
//     let sum=0;
//      args.forEach((el)=>{
//        sum+=el;
//      })
//       return sum;

// }

console.log(`sum of all parameters ${add(100,100,200,349,756)}`);
console.log(`================STEP 3.c=====================`);
console.log(`sum of all parameters=>  ${add("I am ","learning ","ES6 ","features ","in depth")}`);





