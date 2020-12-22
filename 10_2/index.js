//冒泡排序优化，时间复杂度O(n^2)
const bubbleSort = (arr) => {
    let [temp, n, tag] = [0, arr.length, false];
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                tag = true;
            }
        }
        if(tag === false){
            return;
        }
    }
    return arr;
}
// console.log(bubbleSort([1,4,9,6,43,24,5]))

//选择排序，时间复杂度O(n^2)
const selectSort = (arr) => {
    let [min, n, temp] = [0, arr.length, 0];
    for(let i = 0; i < n - 1; i++){
        min = i;
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
// console.log(selectSort([1,4,9,6,43,24,5]))

//插入排序, 时间复杂度为O(n^2);
const insertSort = (arr) => {
    let [index, item, n] = [0, 0, arr.length];
    for(let i = 1; i < n; i++){
        index = i - 1;
        item = arr[i];
        while(index >= 0 && arr[index] > item){
            arr[index+1] = arr[index];
            index--;
        }
        arr[index+1] = item;
    }
    return arr;
}
// console.log(insertSort([1,4,9,6,43,24,5]))

//快速排序，时间复杂度，最好在O(nlogn),最坏的情况是O(n^2);
const quickSort = (arr, left, right) => {
    if(left > right){
        return;
    }
    let i = left,j = right;
    while(i !== j){
        //从右向左进行寻找,比基准值更低的值
        while(arr[j] >= arr[left] && i < j){
            j--;
        }
        //从左往右进行寻找，比基准值大的值
        while(arr[i] <= arr[left] && i < j){
            i++;
        }

        if(i < j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[left], arr[i]] = [arr[i], arr[left]];
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
    return arr;
}
// console.log(quickSort([1,4,9,6,43,24,5],0, 6));

//
