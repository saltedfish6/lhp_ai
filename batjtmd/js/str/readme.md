# 腾讯字符串考题
灵活性
- 将hello 反向输出 olleh
- js reverse
- 字符串和数组上的方法
 - 包装类
   将简单数据类型包装一下，变成对象，实现统一的面向对象写法
   之后立即销毁
   其他语言一样 函数式编程和面向对象编程
   js 统一 很好学
   - reverse
   - join('') 拼接成字符串
   


          
在 JavaScript 里，`"hello"` 确实是简单数据类型（字符串字面量），按道理简单数据类型没有属性和方法。但写法 `"hello".length` 之所以正确，背后依靠的是 JavaScript 的包装对象机制。下面详细解释：

### 包装对象机制
JavaScript 有三种基本包装类型：`Boolean`、`Number` 和 `String`。当你尝试访问简单数据类型的属性或方法时，JavaScript 会在幕后进行如下操作：
1. 创建对应基本包装类型的一个实例。
2. 调用该实例的属性或方法。
3. 销毁这个实例。

### 代码示例解释
对于 `"hello".length` 这行代码，JavaScript 引擎会按以下步骤处理：
```javascript
// 1. 创建 String 包装对象实例
let tempString = new String("hello");

// 2. 调用实例的 length 属性
let length = tempString.length;

// 3. 销毁临时对象
tempString = null;
```

### 总结
所以，虽然 `"hello"` 是简单数据类型，但在访问其 `length` 属性时，JavaScript 会临时创建一个 `String` 对象，让你能像操作对象一样操作简单数据类型。这就是 `"hello".length` 写法正确的原因。

而 `len("hello")` 这种函数式写法，需要你自己定义 `len` 函数来实现获取字符串长度的功能，示例如下：
```javascript
function len(str) {
    return str.length;
}

let result = len("hello");
console.log(result); // 输出: 5
``` 


### "hello" == new String('hello')
== 是相等运算符，在比较时会进行类型转换。当使用 == 比较字符串字面量 "hello" 和 new String('hello') 创建的对象时，JavaScript 会将对象转换为基本数据类型，然后再进行值的比较。 new String('hello') 对象转换为基本数据类型后就是 "hello" ，所以比较结果为 true 。

### "hello" === new String('hello')
=== 是严格相等运算符，它在比较时不仅会比较值，还会比较数据类型。字符串字面量 "hello" 是基本数据类型，而 new String('hello') 是对象类型，两者的数据类型不同，所以比较结果为 false 。