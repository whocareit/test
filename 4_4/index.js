
// function d(){
//     console.log(this);
// }
// d();


//判断一个字符串出现次数最多的字符，统计这个次数并输出
function thisMax(s){
    let arr = s.split("");
    let newArr = [];
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) === -1 ){
            newArr.push(arr[i])
            result.push({
                value: arr[i],
                count: 1
            })
        }else{
            for(let j = 0; j < result.length; j++){
                if(result[j].value === arr[i]){
                    result[j].count++;
                }
            }
        }
    }
    let max = {
        value: null,
        count: 0
    }
    for(let i = 0; i < result.length; i++){
        if(result[i].count > max.count){
            max.value = result[i].value;
            max.count = result[i].count;
        }
    }
    return max;
}
console.log(thisMax('qqqi,ljjq'));