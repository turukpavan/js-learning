// // var str="pavan";
// // console.log(str.split("").reverse().join(""));

// function strToArr(str) {
//     let arr=[];
//     for (const  char of str) {
//         arr.push(char);
//     }
//     return arr;
// }
// function reverse(str) {
//     let fun_strToArr=strToArr(str)
//     let rev=[];
//     for (let i = fun_strToArr.length-1; i >=0 ; i--) {
        
//         rev.push(fun_strToArr[i]);
//     }
//     return rev
// }
// function reverseString(str) {
//     let rev_Arr=reverse(str)
//     let rev_str='';
//     for (const iterator of rev_Arr) {
//         rev_str=rev_str+iterator;
//     }
//     return rev_str;

// }
// console.log(reverseString("Pavan")
// );




function longestCommonPrefix(arr,n){ 
    let output="";
    for(let i=0;i<=n;i++){
        arr[i];
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==arr[i+1][j]){
              output=output+arr[i][j]  
            }
        }
    }
    return output
}


console.log(longestCommonPrefix(["greek","greek","greek"],3));