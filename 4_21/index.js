//冒泡排序
function maopao(arr){
    let len = arr.length;
    for(let i = 0; i < len - 1; i++){
        for(let j = 0; j < len - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// console.log(maopao([5,9,78,15,23,45]));

//插入排序
function insertSort(arr){
    let len = arr.length;
    for(let i = 1; i < len; i++){
        let temp = arr[i];
        let j = i;
        while( j > 0 && arr[j - 1] > temp){
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}
// console.log(insertSort([5,9,78,15,23,45]));

//快速排序
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let right = [],left = [];
    let baseIndex = Math.floor(arr.length / 2);
    let base = arr.splice(baseIndex, 1)[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < base){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(base,quickSort(right));
}
// console.log(quickSort([5,9,78,15,23,45]));


//二分法查找实现，需要注意的是，二分法查找实现的基础是该数组是一个给定顺序的数组
function search(arr, val){
    function _search(left, right){
        //当出入的left与right值相等时
        if(left === right){
            return arr[left] === val;
        }

        //不符合条件的情况
        if(left < 0 || right > arr.length - 1 || left > right){
            return false;
        }
        //找到中间元素的位置
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === val){
            return true;
        }else if(arr[mid] > val){
            return _search(left, mid - 1);
        }else{
            return _search(mid + 1, right);
        }
        
    }
    return _search(0, arr.length - 1);
}

// console.log(search([1,5,8,10,25,33,44],10));

function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

//根据前序和中序的得到二叉树
function getTree(dlr, ldr){
    if(dlr.length !== ldr.length){
        throw new Error("no  answer")
    }
    if(dlr.length === 0){
        return null;
    }

    let temp = dlr[0];
    let root = new Node(temp);

    let index = ldr.indexOf(temp);

    let leftLDR = ldr.slice(0, index);
    let leftDLR = dlr.slice(1, 1 + leftLDR.length);
    root.left = getTree(leftDLR, leftLDR);

    let rightLDR = ldr.slice(index + 1);
    let rightDLR = dlr.slice(1 + leftLDR.length);
    root.right = getTree(rightDLR, rightLDR);


    return root;
}

// var root2 = getTree(["A", "T", "C", "E", "F"], ["T", "C", "A", "F", "E"]);

//获取树的深度
function getLength(root){
    if(!root){
        return 0;
    }
    return 1 + Math.max(getLength(root.left),getLength(root.right));
}

// console.log(getLength(root2));

//深度搜索
function deepSearch(root, value){
    if(!root){
        return false;
    }
    if(root.val == value){
        return true;
    }

    return deepSearch(root.left, value) || deepSearch(root.right, value);
}

// console.log(deepSearch(root2,"E"));

//广度搜索
function wideSearch(root, value){
    if(!root){
        return false;
    }
    function _wideSearch(layer){
        let nextLayer = [];
        for(let i = 0; i < layer.length; i++){
            if(layer[i].val === value){
                return true;
            }else{
                if(layer[i].left){
                    nextLayer.push(layer[i].left);
                }
                if(layer[i].right){
                    nextLayer.push(layer[i].right)
                }
            }
        }
        return _wideSearch(nextLayer);
    }
    return _wideSearch([root]);
}

// console.log(wideSearch(root2, "E"));

//比较两颗树的差异得到比较的结果
function diff(root1, root2){
    //用于记录差异的数组
    let result = [];

    if(!root1 && !root2){
        return result;
    }

    if(root1 && !root2){
        result.push({
            type: 'delete',
            from: root1,
            to: root2
        })
    }else if(!root1 && root2){
        result.push({
            type: 'add',
            from: root1,
            to: root2
        })
    }else if(root1.val != root2.val){
        result.push({
            type: 'fix',
            from: root1,
            to: root2
        })
        let leftResult = diff(root1.left, root2.left);
        let rightResult = diff(root1.right, root2.right);
        result = result.concat(leftResult, rightResult);
    }else{
        let leftResult = diff(root1.left, root2.left);
        let rightResult = diff(root1.right, root2.right);
        result = result.concat(leftResult, rightResult);
    }

    return result;
}

var root1 = getTree(["A", "B", "D", "C", "E"], ["D", "B", "C", "A", "E"]);
var root2 = getTree(["A", "T", "C", "E", "F"], ["T", "C", "A", "F", "E"]);

// console.log(root1, root2);
console.log(diff(root1, root2))