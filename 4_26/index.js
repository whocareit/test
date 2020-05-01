// function Queue(){
//     let arr = [];
//     this.PUSH = function(node){
//         arr.push(node);
//     }
//     this.TOP = function(){
//         return arr[0]
//     }
//     this.POP = function(){
//         arr.shift();
//     }
//     this.SIZE = function(){
//         return arr.length;
//     }
//     this.CLEAR = function(){
//         arr = []
//         return;
//     }
// }
// let newArr = ['PUSH 1', 'PUSH 2', 'TOP', 'POP' , 'TOP' , 'POP', 'POP', 'PUSH 1', 'PUSH 2', 'SIZE', 'POP' , 'SIZE']
// let queue = new Queue();
// for(let i = 0; i < newArr.length; i++){
//     var result = newArr[i].split(" ");
//     if(result.includes('PUSH')){
//         queue.PUSH(result[1]);
//     }else if(result.includes('TOP')){
//         if(queue.TOP()){
//             console.log(Number(queue.TOP()))
//         }else{
//             console.log(-1)
//         }
//     }else if(result.includes('POP')){
//         let temp = queue.SIZE();
//         queue.POP()
//         if(temp == queue.SIZE()){
//             console.log(-1)
//         }
//     }else if(result.includes('SIZE')){
//         console.log(Number(queue.SIZE()));
//     }
// }
// let queue = new Queue();
// queue.PUSH(123,4,5,6);
// console.log(queue.POP());
// let array = [1,2,3,4,5];
// array.shift();
// console.log(array)

function get(str){
    let str1 = str.split(" ");
    let result = [];
    for(let i = 0; i < str1.length; i++){
        if(str1[i].indexOf('/') !== -1){
            let temp = str1[i].split("/")[0];
            result.push(temp);
        }
    }
    let newArr = result.map(item => JSON.parse(JSON.stringify(item)))
    return newArr;
}

let str1 = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36";
console.log(get(str1))

