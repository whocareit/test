//js精度运算
// var n = 0.4,m = 0.3,i = 0.2,j = 0.1;
// console.log((n - m) == (i - j));
// console.log((n - m)  == 0.1);
// console.log((i - j) == 0.1)

//闭包
// var obj = { name: 'leipeng', showName: function(){ console.log(this.name); } } 
// obj.showName();

//数组的map方法实现
Array.prototype.map1 = function(callback){
    for(let i = 0; i < this.length; i++){
        this[i] = callback(this[i]);
    }
}

