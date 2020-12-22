## 作用域链与闭包
### 作用域链
```
function f(){
    console.log('a');
    function b(){
        console.log('b');
        function c(){
            console.log('c');
        }
        c();
    }
    b()
}
a() 

```
* 作用域链的生成其实就是一个链式访问内部作用域的一个过程，如同上面的实例所示，其生成一个作用域的过程如下：
1.  f定义阶段  f.[[scope]]      scope chain    0 --> GO(全局对象)

2. a 执行阶段  f.[[scope]]      scope chain    0 --> a函数的AO
                                            1 --> GO
   b 定义阶段   b.[[scope]]     scope chain    0 --> f函数的AO
                                            1 --> GO

3. b 执行阶段   b.[[scope]]     scope chain    0 --> b函数的AO
                                             1 --> f函数的AO
                                            2 --> AO
 c定义阶段    c.[[scope]]       scope chain    0 --> b函数的AO
                                           1 --> f函数的AO
                                            2 --> AO

4.  c执行阶段   c.[[scope]]     scope chain    0 --> c函数的AO
                                              1 --> b函数的AO
                                              2 --> f函数的AO
                                              3 --> AO
### 闭包
* 闭包产生的原因：当前函数被保存到了函数的外部，从而导致其所在得当前作用域也被保存到了外部，进而会影响到当前作用域的变量

## 原型与原型链
### 原型
* 构造函数：其余函数在本身上没有什么区别，为了区分在其命名时，其会被命名成大驼峰式，然后会用new functionName来创建这个对象
* 使用构造函数创建对象的实例过程：首先会生成一个this = {}，最后会return this，在生成的这个this中有__proto__,constructor
* 原型所具备的属性
    * constructor 该属性指向的是其本身
    * prototype 用于查看对象的构造函数
    * __proto__ 表示其原型的指向
* 案列
```
    Person.prototype.name = "zhangSan"
    function Person(){

    }
    const person = new Person(); //表示一个实例person
    console.log(person.name) //此时打印出的值为lisi
    Person.prototype.name = "lisi"
```
```
    Person.prototype.name = "张三"
    function Person(){

    }
    const person = new Person();
    console.log(person.name); //此时打印张三
    Person.prototype = {
        name: 'lisi'
    }
```
在上面的这个案例中为什么有这样的结果：
1. 在第一个中，更改的是其原型本身所指向的对象因此在预编译的过程，其name属性已经更改
2. 在第二个中，是因为其Person.prototype所指向的对象变成了一个新的对象，所指向的引用地址已经改变，因此在打印之前所输出的结果就为张三
### 原型链


