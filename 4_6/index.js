//bind函数的实现方式
Function.prototype.bind = function(){
    //获取到当前作用域this
    let self = this;
    //获取传入的this
    let context = [].shift.call(arguments);
    //获取函数中剩余的参数
    let args = [].slice.call(arguments);
    return function(){
        //执行新传入的函数时，会把之前传入的context当作新函数体内的this，并且组合两次分别
        //传入的参数，作为新函数的参数
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    }
}
// var obj = {
//     name: 'zhangsan'
// }
// var fun = function (a,b,c,d){
//     console.log(this.name);
//     console.log([a,b,c,d]);
// }.bind(obj,1,2)

// fun(3,4);

//防抖函数实现,防抖函数实现是使函数在频繁发生时等待一段时间再去执行的行为
function reclicetime(content,wait){
    let timer = null;
    return function(){
        let _self = this;
        let args = arguments;
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            content.apply(_self, args)
        },wait)
    }
}

//节流函数的实现,为了防止网站受到恶意的点击
function throttle(handle, wait){
    let initTime = 0;
    return function(){
        let nowTime = new Date().getTime();
        if(nowTime - initTime > wait){
            handle.apply(this, arguments);
            initTime = nowTime;
        }
    }
}