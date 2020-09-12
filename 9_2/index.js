//懒加载实现方式
// var viewHeight = document.documentElement.clientHeigth;

// function lazyload(){
//     let eles = document.querySelectorAll('img[data-originall][lazyload]');
//     Array.prototype.forEach.call(eles, function(item, index){
//         let rect;
//         if(item.dataset.original === ''){
//             return;
//         }
//         //Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置
//         rect = item.getBoundingClientRect();

//         if(rect.bottom >= 0 && rect.top < viewHeight){
//             !function(){
//                 let img = new Image();
//                 img.src = item.dataset.url;
//                 img.onload = function(){
//                     item.src = img.src;
//                 }
//                 item.removeAttribute('data-original');
//                 item.removeAttribute('lazyload')
//             }()
//         }
//     })
// }

// lazyload();

// document.addEventListener('scroll', lazyload)
// function getNum(n){
//     let num = [],arr = [], j = 9;
//     if(n <= 10){
//         return n;
//     }
//     let min = num[0];
//     for(let i = 1; i < num.length; i++){
//         if(min > num[i]){
//             min = num[i];
//         }
//     }
//     return min;
//     let count=0;
//     return _get(n, arr, j );
//     function _get(n, arr, j){
//         for(let i = 9; i >= 1 && i <= j; i--){
//             if(i * i > n){
//                 continue;
//             }
//             let m = n % (i * i);
//             console.log(m, count++);
//             j = i
//             if(m !== 0){
//                 arr.unshift(i)
//                 _get(m, arr, j);
//             }
//         }
//         return arr;
//     }
// }
// console.log(getNum(63))
// let arr = [1,2,4]
// let brr = [4,4,9,10]
// function test(arr, brr){
//     let newrr = [...arr, ...brr];
//     let arr1 = newrr.sort(function(a, b) {
//         return a - b
//     })
//     return arr1;
// }
// console.log(test(arr, brr));
// let n = '{"1":123,"2":234,"8":456}'
// let str = JSON.parse(n);
// let arr = [];
// for(let item in str){
//     if(item){
//         arr[parseInt(item)] = str[item];
//     }
// }
// for(let i = 0; i < arr.length; i++){
//     if(!arr[i]){
//         arr[i] = 0;
//     }
// }
// arr.shift();
// console.log(arr,typeof arr[1]);
// function bar(a){
//     console.log(a,b); // funtion a, undefined
//     var b = 3;
//     console.log(a,b); // 3, 3
//     var a = 1;
//     console.log(a,b); // 3, 1
//     function a(){}
//     console.log(a); //1
// }
// bar(3);
console.log(1)
setTimeout(function(){
    console.log(2);
},0)
new Promise(() => {
    console.log(3);
    setTimeout(() => {
        console.log(4);
    })
})
console.log(5);
