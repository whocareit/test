//Promise封装
function myPromise(fn){
    if(typeof fn !== 'function'){
        throw  Error(`myPromise resolved ${fn} is not a function`)
    }

    var _self = this;
    this.status = 'pending';
    this.data = null;
    this.resolvedArr = [];
    this.rejectedArr = [];

    function resolved(data){
        setTimeout(function(){
            if(_self.status === 'pending'){
                _self.status = 'resolved';
                _self.data = data;
                _self.resolvedArr.forEach(fn => fn())
            }
        }, 0)
    }

    function rejected(err){
        setTimeout(function(){
            if(_self.status === 'pending'){
                _self.status = 'rejected';
                _self.data = err;
                _self.rejectedArr.forEach(fn => fn())
            }
        },0) 
    }

    fn(resolved,rejected);
}

myPromise.prototype.then = function(onResolved, onRejected){
    var self = this;
    if(this.status === 'resolved'){
        return new myPromise(function(resolved, rejected){
            var res = onResolved(self.data);
            if(res instanceof myPromise){
                res.then(resolved, rejected);
            } else {
                resolved(res);
            }
        })
    }

    if(this.status === 'rejected'){
        return new myPromise(function(resolved, rejected){
            var res = onRejected(self.data);
            if(res instanceof myPromise){
                res.then(resolved, rejected);
            }else{
                rejected(res);
            }
        })
    }

    if(this.status === 'pending'){
        return new Promise(function(resolved, rejected){
            self.resolvedArr.push((function(onResolved){
                return function(){
                    var res = onResolved(self.data);
                    if(res instanceof myPromise){
                        res.then(resolved, rejected);
                    }else{
                        resolved(res)
                    }
                }
            })(onResolved))

            self.rejectedArr.push((function(onRejected){
                return function(){
                    var res = onRejected(self.data);
                    if(res instanceof myPromise){
                        res.then(resolved, rejected);
                    }else{
                        rejected(res)
                    }
                }
            })(onRejected))
        })
    }
}

var p = new myPromise(function(resolved, rejected){
    console.log('1');
    resolved('2')
});
console.log('3')
p.then(data => console.log(data))
p.then(data => new myPromise((resolved, rejected) => resolved(data)))
console.log(p)

// let obj = {
//     foo() { // （所以这⾥是静态声明，⽽⾮初始器赋值）
//      console.log(super.name, this.name);
//      }
//     }
//     Object.setPrototypeOf(obj, {name: 'Super'});
//     obj.name = 'obj';
//     obj.foo(); // Super, obj
//     let obj2 = Object.create(obj, {name: 'I am obj2'});
//     obj2.foo(); // Super, I am obj2
//     let foo = obj.foo;
//     foo(); // ???,

function result(arr){
    if(arr.includes('.')){
        let index = arr.indexOf('.');
        let zshu = arr.slice(0, index);
        zshu.push('0')
        let xiao = arr.slice(index + 1);
        let newZ = zshu.reverse();
        let str1 = '';
        for(let i = 1; i < newZ.length; i++){
            str1 += newZ[i]
            if(i % 3 == 0 && i != newZ.length - 1){
                str1 += ','
            }
        }
        let str2 = ""
        if(xiao.length >= 2){
            str2 = str2 + xiao[0] + xiao[1]
        }else if(xiao.length == 1){
            str2 = str2 + xiao[0] + '0'
        }
        return str1.split('').reverse().join('')+ '.' + str2;
    }else{
        arr.push('0');
        let newAr = arr.reverse();
        let str1 = '';
        for(let i = 1; i < newAr.length; i++){
            str1 += newAr[i]
            if(i % 3 == 0 && i != newAr.length - 1){
                str1 += ','
            }
        }
         return str1.split('').reverse().join('')
    }
}

// var abc = ['-123456','78945456','4545465.00','454645.99999','-4545644']
// for(let i = 0; i < abc.length; i++){
//     var line = abc[i].split('');
//     if(line[0] == '-'){
//         line.shift();
//         console.log(`($${result(line)})`)
//     }else{
//         console.log(`$${result(line)}`)
//     }
// }

// console.log(result(['1','2','3','7','4','.','5']))