# 为什么要有变量？

程序中申明变量，给程序带来了状态
变量是对内存中数据的抽象，他提供了可读、可写，可复用的方式来操作值
变量的本质是对一块内存地址的引用。

- js 里变量的类型由上面决定？
    弱类型

- js 的几种基本数据类型？
    String Number Boolean Null Undefined 
    Symbol BigInt （ES10）
- js 中怎么申明一个变量  var let const
    var 变量提升  函数提升  作用域
    let const 没有变量提升  没有函数提升  块级作用域
    推荐使用 const  不修改的变量使用 const  可修改的变量使用 let
    变量的命名规则：
        1. 不能以数字开头
        2. 不能使用关键字