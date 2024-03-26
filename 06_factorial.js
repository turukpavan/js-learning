function factorial(num) {
    let fact=1;
    for (let i = 5; i >=1; i++) {
       fact=fact*i;
        
    }
    console.log(`factorial of ${num} is ${fact}`);
}
factorial(5);
factorial(3);