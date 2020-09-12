//Set数据结构部分
// 例一
// const set = new Set([1, 2, 3, 4, 4]);
// [...set]
// console.log([...set])
// // [1, 2, 3, 4]

// // 例二
// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
// items.size // 5
// console.log(items.size)

// const str = [...new Set('abcddeeffgghh')].join('');
// console.log(str);

// const values = new Set();
// console.log(values.add(1));
// console.log(values.add(2));
// console.log(values.has(1));

// let set = new Set(['red', 'green', 'blue']);

// for (let item of set.keys()) {
//   console.log(item);
// }
// // red
// // green
// // blue

// for (let item of set.values()) {
//   console.log(item);
// }
// // red
// // green
// // blue

// for (let item of set.entries()) {
//   console.log(item);
// }
// // ["red", "red"]
// // ["green", "green"]
// // ["blue", "blue"]

// set.forEach((value, key) => console.log(key + ' : ' + value))

// const m = new Map();
// const o = {p: 'Hello World'};

// console.log(m.set(o, 'content'))
// console.log(m.get(o)) // "content"

// console.log(m.has(o)) // true
// console.log(m.delete(o) )// true
// console.log(m.has(o) )// false

// const map = new Map();

// map
// .set(1, 'aaa')
// .set(1, 'bbb');

// console.log(map.get(1))


// const map = new Map();

// const k1 = ['a'];
// const k2 = ['a'];

// map
// .set(k1, 111)
// .set(k2, 222);

// map.get(k1) // 111
// map.get(k2) // 222

// let map = new Map();

// map.set(-0, 123);
// console.log(map.get(+0) )// 123

// map.set(true, 1);
// map.set('true', 2);
// console.log(map.get(true)) // 1

// map.set(undefined, 3);
// map.set(null, 4);
// console.log(map.get(undefined)) // 3

// map.set(NaN, 123);
// console.log(map.get(NaN)) // 123

//Promise部分
// const p1 = new Promise((resolve, reject) => {
//     resolve('hello');
// })
// .then(result => result)
// .catch(e => e);
// //resolve status

// const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了');
// })
// .then(result => result)
// .catch(e => e)
// //reject 

// //p1会resolved  p2会rejected  p2有自己的catch方法，该方法返回的是一个新的实例
// //p2指向的实际上是这个新的实例  

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));

// setTimeout(function() {
//     console.log('three')
// },0)

// Promise.resolve().then(function() {
//     console.log('two')
// })

// console.log('one');

//Iterator 遍历器
// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// Generator函数
function *genera(){
    yield '1';
    yield '2';
    return 'ending'
}
var hr = genera();
console.log(hr.next());
console.log(hr.next());
console.log(hr.next());
console.log(hr.next());

var my = {};
my[Symbol.iterator] = function *(){
    yield 1;
    yield 2 ;
    yield 3;
};
console.log([...my])