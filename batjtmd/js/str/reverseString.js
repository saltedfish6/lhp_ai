/**
 * @func 反转字符串
 * @param {string} str 
 * @returns {string}
 */
//split() 方法用于把一个字符串分割成一个字符串数组。join() 方法用于把数组中的所有元素放入一个字符串。
// es5 函数表达式
function reverseString(str) {
    // str 是什么类型？ 字符串 简单数据类型 primitive 
    // .split() .是面向对象的写法

    return str.split('').reverse().join('');
}

//  es6 箭头函数 简洁 function 不要了 用箭头代替
//   {}也省了，但只有一句话的时候可以省
//   它是只有返回值的时候， 连return 都可以省略
const reverseString = (str) => str.split('').reverse().join('');

// 测试
// const result = reverseString('hello');
console.log(result); // 输出: olleh