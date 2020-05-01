// //关于图的部分
// //创建图的结构的方式
// function Node(val){
//     this.val = val;
//     this.neighbors = [];
// }

// let A = new Node('a');
// let B = new Node('b');
// let C = new Node('c');
// let D = new Node('d');
// let E = new Node('e');

// A.neighbors.push(D, B, C);
// B.neighbors.push(A, C, E);
// C.neighbors.push(A, E);
// D.neighbors.push(A, B);
// E.neighbors.push(B, C);

// // console.log(A);

// //图的深搜
// function depthSearch(node, value){
//     if(!node){
//         return false;
//     }
//     let cache = [];
//     function _depthSearch(node){
//         if(cache.includes(node)){
//             return false;
//         }
//         if(node.val === value){
//             return true;
//         }

//         cache.push(node)
//         for(let i = 0; i < node.neighbors.length; i++){
//             if(_depthSearch(node.neighbors[i])){
//                 return true;
//             }
//         }
//         return false;
//     }

//     return _depthSearch(node)
// }

// // console.log(depthSearch(A, 'b'));

// //图的广度搜索
// function wideSearch(node, value){
//     if(!node){
//         return false;
//     }
//     let cache = [];
//     function _wideSearch(layer){
//         if(layer.length === 0){
//             return false;
//         }
//         let nextlayer = [];
//         for(let i = 0; i < layer.length; i++){
//             let cur = layer[i];
//             if(cur.val === value){
//                 return true;
//             }
//             cache.push(cur);
//             for(let j = 0; j < cur.neighbors.length; j++){
//                 if(!nextlayer.includes(cur.neighbors[j])){
//                     nextlayer.push(cur.neighbors[j]);
//                 }
//             }
//         }
//         for(let i = 0; i < nextlayer.length; i++){
//             if(cache.includes(nextlayer[i])){
//                 nextlayer.splice(i, 1);
//                 i--;
//             }
//         }
//         return _wideSearch(nextlayer);
//     }
//     return _wideSearch([node])
// }

// // console.log(wideSearch(A, 'f'));


// //prim算法
// function prim(nodes, sides){
//     if(nodes.length <= 1 || sides.length !== nodes.length){
//         return;
//     }
//     //将第一个点入到集合中
//     let hordes = [nodes[0]];
//     while(hordes.length < nodes.length){
//         _addNodeToHords();
//         console.log(hordes.map((item) => item.val))
//     }

//     function _addNodeToHords(){
//         //result返回三个参数 当前节点node  目标节点target 距离dis
//         let result = _chooseNearToHordes();
//         result.node.neighbors.push(result.target);
//         result.target.neighbors.push(result.node);
//         hordes.push(result.node);
//     }

//     function _chooseNearToHordes(){
//         let result = {
//             node: null,
//             dis: Infinity,
//             target: null
//         }
//         for(let i = 0; i < nodes.length; i++){
//             let n = nodes[i];
//             if(hordes.includes(n)){
//                 continue;
//             }
//             //得到最短距离 minTemp返回两个参数 目标节点与当前距离
//             let minTemp = _getMinDis(n);
//             if(minTemp.dis < result.dis){
//                 //根据距离来更新
//                 result.node = n;
//                 result.dis = minTemp.dis;
//                 result.target = minTemp.target;
//             }
//         }
//         return result;
//     }

//     function _getMinDis(node){
//         let result = {
//             target: hordes[0],
//             dis: Infinity
//         }
//         for(let i = 0; i < hordes.length; i++){
//             let target = hordes[i];
//             let row = nodes.indexOf(node);
//             let col = nodes.indexOf(target);
//             let dis = sides[row][col];
//             if(dis < result.dis){
//                 result.target = target;
//                 result.dis = dis;
//             }
//         }
//         return result;
//     }
// }
// var a = new Node('a');
// var b = new Node('b');
// var c = new Node('c');
// var d = new Node('d');
// var e = new Node('e');

// var nodes = [a, b, c, d, e];
// var sides = [
//     [0, 7, 9, 6, Infinity],
//     [7, 0, Infinity, 8, 4],
//     [9, Infinity, 0, Infinity, 5],
//     [6, 8, Infinity, 0, Infinity],
//     [Infinity, 4, 5, Infinity, 0]
// ]

// prim(nodes, sides);

let num = 0;
//青蛙跳台阶问题
function count(total){
    //用于缓存数据
   let cache = {};
   function _count(total){
      if(cache[total]){
          return cache[total];
      }
      num++;
      let result;
      if(total === 0) result = 0;
      else if(total === 1) result = 1;
      else if(total === 2) result = 2;
      else{
          result = _count(total - 1) + _count(total - 2);
      }
      cache[total] = result;
      return result;
   }
   return _count(total)
}

// console.log(count(100),num)
function exchange(total, denos){
    if(total <= 0){
        return [];
    }
    num++;
    //作为一个临时变量
    let max = 0;
    for(let i = 0; i < denos.length; i++){
        let deno = denos[i];
        if(deno > max && deno <= total){
            max = deno;
        }
    }
    let result = [max];
    let next = exchange(total - max, denos);
    result = result.concat(next);
    return result;
}


//精确找零
function change(total, denos){
    let cache = [];
    function _change(total, index){
        if(total === 0){
            return []
        }else if(total < 0){
            return false;
        }else if(index >= denos.length){
            return false;
        }

        let result;
        //符合条件的情况
        let deno = denos[index];
        if(deno === total){
            return [deno];
        } else if(deno > total){
            return _change(total, index + 1);
        } else {
            //分为找和不找两种情况
            //找的情况
            let result1 = _change(total - deno, index);
            //不找的情况
            let result2 = _change(total, index + 1);
            if(result1 === false && result2 === false){
                return  false;
            } else if(result2 === false && result1 !== false){
                result = [deno].concat(result1);
            } else if(result2 !== false && result1 === false){
                result = result2;
            }else{
                result1 = [deno].concat(result1);
                result = result1.length > result2.length ? result2 : result1;
            }
        }
        cache.push({
            index,
            total,
            result
        })
        return result;
    }
    return _change(total, 0);
}
let total = 51;
let denos = [30, 25, 10, 5, 1];
console.log(exchange(total, denos), num)
console.log(change(total, denos))