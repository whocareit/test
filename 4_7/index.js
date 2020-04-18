/*
 * @Author: your name
 * @Date: 2020-04-07 09:15:09
 * @LastEditTime: 2020-04-07 10:18:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\4_7\index.js
 */
function Fibonacci(n)
{
    // write code here
    if(n <= 0){
        return 0;
    }
    let cache = [];
    function _fib(n){
        if(cache[n] != undefined ){
            return cache[n];
        }
        if(n == 1 || n == 2){
            cache[n] = 1;
            return 1;
        }
        let temp = _fib(n - 1) + _fib(n - 2);
        cache[n] = temp;
        return temp;
    }
    return _fib(n)
}

console.log(Fibonacci(6));