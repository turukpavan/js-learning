const array=[3,9,7,6,19,29,53];
function isPrime(num){
    for (let index = 2; index < num; index++) {
      if (num%index==0) {
       return false;
      } 
    }
    return true;
   }

function countPrime(arr) {
        let count=0;
        let primeArray=[];
    arr.forEach(element => {
       if(isPrime(element)){
            count++
            primeArray.push(element);
       } 
    });
    console.log(`Array of prime Numbers=> ${primeArray}`);
    console.log(`count of prime numbers=> ${count}`);
}

countPrime(array);
