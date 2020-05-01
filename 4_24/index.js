// let arr = [3,4,5,1,2];
function minArray(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
// console.log(minArray(arr))

//跳台阶的n阶问题
function jump(number){
    if(number <= 2){
        return number;
    }
    let arr = [];
    for(let i = 1; i <= number; i++){
        arr[i] = 1;
    }

    arr[0] = 0;
    for(let i = 2; i <= number; i++){
        for(let j = i -1; j > 0; j--){
            arr[i] += arr[j];
        }
    }

    return arr[number];
}

// console.log(jump(3))

function feibo(number){
    let cache = [];
    function _feibo(number){
        console.log(cache)
        if(cache[number]){
            return cache[number];
        }else{
            if(number <= 2){
                cache[number] = 1;
                return 1;
                }
                let result = _feibo(number - 1) + _feibo(number - 2);
                cache[number] = result
                return result;
                            
        }
    }
    return _feibo(number)
}

// console.log(feibo(3))