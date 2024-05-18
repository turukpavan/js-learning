function median(arr) {
    arr.sort((a,b)=>a-b);
    let middleIndex=Math.floor(arr.length/2)
    if (arr.length%2==0) {
        return (arr[middleIndex-1]+arr[middleIndex]/2)
    } else {
        return arr[middleIndex]
    }
    
}