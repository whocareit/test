//1. 数组拼接
// 1

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// For example, given nums = [0, 3, 0, 1, 12], after calling your function, nums should be [3, 1, 12, 0, 0].
// Note: You must do this in-place without making a copy of the array. Minimize the total number of operations.



// ```javascript
// function resolve() {
//   // code here
// }
// ```

// function resolve(arr){
//     let newarr = [];
//     let curr = [];
//     arr.forEach(item => {
//         if(item === 0){
//             curr.push(item)
//         }else{
//             newarr.push(item);
//         }
//     });
//     return newarr.concat(curr);
// }
// console.log(resolve([0, 3, 0, 1, 12]));

//2. 实现一个函数`countLongest(tree)`，输入一棵二叉树，返回二叉树中距离最长的两个叶子节点之间的距离。
//计算树的深度
// function getTreeDepth(root){
//     if(!root){
//         return 0;
//     }
//     return 1 + Math.max(getTreeDepth(root.left),getTreeDepth(root.right));
// }
// function countLongest(tree) {
// 	// code here
// 	if(!tree.left || !tree.right){
//         return getTreeDepth(tree);
//     }
//     return getTreeDepth(tree.left) + getTreeDepth(tree.right)
// }
//3. 在前端开发中，通常会把多个js文件合并成一个文件，以减少网络请求次数，达到优化加载速度的目的，但是当文件之间存在依赖关系时，对js合并的顺序，会有一定的要求，比如 A.js 依赖了 B.js，那打包后的文件，B.js 需要排在 A.js 的前面。

// 实现一个函数`resolve(tree)`，根据js的依赖关系树 tree，输出合理的打包顺序的数组（结果可能不唯一，输出其中一种即可）。

// 样例
// ```javascript
// var tree1 = {
//     name: 'main.js',
//     require: [{
//         name: 'A.js'
//     }, {
//         name: 'B.js'
//     }]
// }
// resolve(tree1) // ['A.js', 'B.js', 'main.js']

// function resolve(tree){
//     let cur = [];
//     function _res(tree){
//         if(tree.name){
//             if(!cur.includes(tree.name)){
//                 cur.unshift(tree.name)
//             }
//         }
//         if(tree.require){
//             let newarr = tree.require;
//             let len = newarr.length;
//             for(let i = len - 1; i >= 0; i--){
//                 if(newarr[i] && newarr[i].require){
//                     _res(newarr[i].require)
//                 }
//             }
//         }
//     }
//     _res(tree);
//     return cur;
// }

// var tree2 = {
//     name: 'page.js',
//     require: [{
//         name: 'A.js',
//         require: [{
//             name: 'B.js',
//             require: [{
//                 name: 'C.js'
//             }]
//         }]
//     }, {
//         name: 'D.js',
//         require: [{
//             name: 'C.js'
//         }, {
//             name: 'E.js'
//         }]
//     }]
// }
// var tree1 = {
//         name: 'main.js',
//         require: [{
//             name: 'A.js'
//         }, {
//             name: 'B.js'
//         }]
//     }
// console.log(resolve(tree));

//this指向相关案列
// var name = 'global name'

// var a = {
//     name: 'name a',
//     func: function(){
//         console.log(this.name);
//     }
// }

// a.func();
// window.a.func();

// var func = a.func();
// func();

// func = window.a.func();
// func();

