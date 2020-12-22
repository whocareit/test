//二分搜索
//递归方式实现
const recursionBS = (arr, l, r, k) => {
    if(r < l) return -1;
    let mid = Math.floor((l + r) / 2);
    if(arr[mid] === k) return mid;
    else if(arr[mid] < k) return recursionBS(arr, l, mid - 1, k);
    else return recursionBS(arr, mid + 1, r, k);
}
console.log(recursionBS([1,2,3,4,5,6],0,5,3));

const iterationBS = (arr, l, r, k) => {
    if(r < l) return -1;
    let mid;
    while(l <= r) {
        mid = Math.floor((l + r) / 2);
        if(k = arr[mid]) return mid;
        else if(k < arr[mid]) r = mid - 1;
        else l = mid + 1;
    }
}
console.log(iterationBS([1,2,3,4,5,6],0,5,3));

//斐波拉契
//递归
const reFib = (n) => {
    if(n === 0) return 0;
    else if(n === 1) return 1;
    return reFib(n - 1) + reFib(n - 2);
}
console.log(reFib(5))

//迭代
const iterFib = (n) => {
    let [Fib1, Fib2, Fib3] = [0, 1, 0];
    if(n === 0) return Fib1;
    else if(n === 1) return Fib2;
    while(n > 1){
        Fib3 = Fib2 + Fib1;
        Fib1 = Fib2;
        Fib2 = Fib3;
        n--;
    }
    return Fib3;
}
console.log(iterFib(5))
