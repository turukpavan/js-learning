function factorialOfNum(n) {
    let fact=1;
    if (typeof n=='string' || n==NaN || n==undefined) {
        console.log(`Factorial of ${n} : INVALID INPUT`);
    }else{
        for (let i = 1; i <= n; i++) {
            fact=fact*i;
        }
        console.log(`Factorial of ${n} : ${fact}`);
    }
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);