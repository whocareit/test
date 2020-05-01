//优化的圣杯模式继承实现
var inherit = (function(){
    var F = function(){};
    return function(Target, Origin){
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uper = Origin.prototype;
    }
})();
