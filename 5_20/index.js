// let line = "1,3,8,11,34,11,22,9 10";//read_line();
// let arr = line.split(" ")[0];
// let array = arr.split(",");
// let target = line.split(" ")[1];
// let newArr = [];
// for(let t = 0; t < array.length; t++){
//     newArr.push(Number(array[t]));
// }
// let num = Number(target);

// function twoSum(newArr, num){
//     let result = [];
//     for(let i = 0; i < newArr.length; i++){
//         for(let j = i + 1; j < newArr.length; j++){
//           if(newArr[i] + newArr[j] == num){
//             result.push(i,j);
//         }
//     }
//    }
//     return result;
// }

// console.log(twoSum(newArr, num));

// var x = 1;
// function foo(x, y = function() { x = 2 ;}){
//     x = 3;
//     y();
//     console.log(x);
// }

// foo();

// function thorwIsMiss(){
//     throw new Error('Miss parameter')
// }

// function foo(mustBeProvide = thorwIsMiss()){
//     return mustBeProvide;
// }

// function sortNumber(){
//     return Array.prototype.slice.call(arguments).sort((a, b) => a - b)
// }

// function sortNumbers(...numbers){
//     return numbers.sort((a, b) => a - b)
// }

// console.log(sortNumber(3,4,1,5,3,9))
// console.log(sortNumbers(3,4,1,5,3,9))

function clone(target, origin){
    var target = target || {};
    for(var item in origin){
        if(origin.hasOwnProperty(item)){
            if(origin[item] !== null && typeof origin[item] === 'object'){
                if(Object.prototype.toString.call(origin) === ['object Array']){
                    target[item] = []
                }else{
                    target[item] = {}
                }
                clone(target[item], origin[item])
            }else{
                target[item] = origin[item];
            }
        }
    }
    return target;
}

var str1 = {
    a: 1,
    b: [
        {
            c: 1
        }
    ]
}

function maopao(arr){
    let len = arr.length;
    for(let i = 0; i < len - 1; i++){
        for(let j = 0; j < len - i; j++){
            if(arr[j + 1] < arr[j]){
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}
let array = [4,1,46,13,67];
console.log(maopao(array));