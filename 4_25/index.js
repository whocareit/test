//给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。

function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
function getTrees(n){
    if(n === 0){
        return []
    }
    function _get(n, index){
        if(n === 0) return [null];
        if(n === 1) return [new Node(n + index)];
        let result = [];
        let node;
        for(let i = 1; i <= n; i++){
            for(let ln of _get(i - 1, index)){
                for(let rn of _get(n - i, index + i)){
                    node = new Node(i + index);
                    node.left = ln;
                    node.right = rn;
                    result.push(node);
                }
            }
        }
        return result;
    }
    return _get(n, 0)
}

//promise封装
// var n = new Promise((resolved, rejected) => {

// });
// console.log(n)

function myPromise(fn){
    if(typeof fn !== 'function'){
        throw Error(`Promise resolver ${fn} is not a function`);
    }

    var self = this;
    this.status = 'pending';
    this.data = null;
    this.resolvedArr = [];
    this.rejectedArr = [];

    function resolved(data){
        setTimeout(function(){
            if(self.status === 'pending'){
                self.status = 'resolved';
                self.data = data;   
                self.resolvedArr.forEach(fn => fn())
            }
        }, 0)
    }

    function rejected(err){
        setTimeout(function (){
            if(self.status == 'pending'){
                self.status = 'rejected';
                self.data = err;
                self.rejectedArr.forEach(fn => fn())
            }
        }, 0)
    }

    fn(resolved, rejected);
}

myPromise.prototype.then = function(onResolved, onRejected){
    var self = this;
    if(this.status === 'resolved'){
        return new myPromise(function(resolved, rejected){
            var res = onResolved(self.data);
            if(res instanceof myPromise){
                res.then(resolved, rejected);
            }else{
                resolved(res);
            }
        })
    }

    if(this.status === 'rejected'){
        return new myPromise(function (resolved, rejected){
            var res = onRejected(self.data);
            if(res instanceof myPromise){
                res.then(resolved, rejected);
            }else{
                rejected(res);
            }
        })
    }

    if(this.status === 'pending'){
        return new myPromise(function(resolved, rejected){
            self.resolvedArr.push((function(onResolved){
                return function(){
                    var res = onResolved(self.data);
                    if(res instanceof myPromise){
                        res.then(resolved, rejected);
                    }else{
                        resolved(res);
                    }
                }
            })(onResolved))

            self.rejectedArr.push((function (onRejected){
                return function(){
                    var res = onRejected(self.data);
                    if(res instanceof myPromise){
                        res.then(resolved, rejected)
                    }else{
                        rejected(res);
                    }
                }
            })(onRejected))
        })
    }
}

// var p = new myPromise(function (resolved, rejected)  {
//     console.log('1')
//     resolved('2')
// })
// p.then(data => console.log(data))
// console.log('3')
// p.then(data => console.log(data))
class Person{
    constructor(){
        this.eat = this.eat.bind(this);
        this.heshiu = this.heshiu.bind(this);
    }

    static heshiu(){
        console.log('heshui')
    }

    eat(){
        console.log('eat')
    }
}

console.log( Person.heshiu())