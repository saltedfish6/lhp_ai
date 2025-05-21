/**
 * 创建一个返回"Hello World"的函数
 * @return {Function} 返回一个无论传入什么参数都会返回"Hello World"的函数
 */
var createHelloWorld = function() {
    // 这是一个高阶函数(Higher-Order Function)的例子
    // 高阶函数是指返回另一个函数的函数
    
    /**
     * 内部匿名函数，无论传入什么参数都返回"Hello World"
     * @param {...any} args - 任意数量的任意类型参数
     * @return {string} 始终返回字符串"Hello World"
     */
    return function(...args) {
        // ...args 是剩余参数语法(Rest Parameters)
        // 它允许函数接收任意数量的参数，并将它们收集到一个数组中
        // 在这个函数中，我们实际上并没有使用传入的参数
        
        // 无论传入什么参数，始终返回字符串"Hello World"
        return "Hello World";
    }
};

// 使用示例
const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction());          // 输出: Hello World
console.log(helloWorldFunction(1, 2, 3));   // 输出: Hello World
console.log(helloWorldFunction("你好"));    // 输出: Hello World 