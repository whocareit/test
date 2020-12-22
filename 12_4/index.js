//bubbleSort
//最好时间复杂度为O(n) 最差为O(n^2);
const bubbleSort = (arr) => {
    let [temp, len, flag] = [0, arr.length, false]
    for(let i = 1; i < len - 1; i++) {
        for(let j = 0; j < len-i-1; j++){
            if(arr[j] > arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                flag = true;
            }
        }
        if(flag === false){
            return
        }
    }
    return arr;
}

// console.log(bubbleSort([10,2,4,12,3,89,34]));

//选择排序，每一次扫描都找出最小的值放在无序区的首部。
//最好时间复杂度为O(n) 最差为O(n^2);
const selectSort = (arr) => {
    let [min, len, temp] = [0, arr.length, 0];
    for(let i = 0; i < len; i++) {
        min = i;
        for(let j = i+1; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
// console.log(selectSort([10,2,4,12,3,89,34]))

//插入排序
//思路：假设第一张牌已经插好，从第二张牌开始依次插入，每张牌都和之前的已经排序号的牌进行比较
//找到自己所对应的位置插入即可
const insertSort = (arr) => {
    let [index, item, len] = [0, 0, arr.length];
    for(let i = 1; i < len; i++) {
        index = i - 1;
        //此时假定第一个已经排好序
        item = arr[i];
        while(index >= 0 && arr[index] > item) {
            arr[index+1] = arr[index];
            index--;
        }
        arr[index+1] = item;
    }
    return arr;
}
console.log(insertSort([10,2,4,12,3,89,34]))