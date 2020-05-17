//标签模板实列：
let a = 5;
let b = 5;

function tag(s, v1, v2){
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return 'ok';
}

//标签模板的调用
// tag`Hello ${a + b} world ${a * b}`;


let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
let msg1 = passthru1`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals){
    let result = "";
    let i = 0;

    while( i < literals.length){
        result += literals[i++];
        if(i < arguments.length){
            result += arguments[i];
        }
    }

    return result;
}

function passthru1(literals, ...values){
    let output = "";
    let index;
    for(index = 0; index < values.length; index++){
        output += literals[index] + values[index];
    }
    output += literals[index];
    return output;
}

// console.log(msg);
// console.log(msg1);

var str1 = '12 13 14 99 25';
var arr = str1.split(" ").map(item => Number(item));
arr.sort((a, b) =>  a - b);

// console.log(arr);

var dataString = 'asd46456';
console.log(parseInt(dataString.split("").reverse().join("")));

