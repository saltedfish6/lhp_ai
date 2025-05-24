// 公司有编程风格要求
let str = "hello";
var str2 = "world";
const strObj = new String("hello");
var str3 = "123";
// `hello ${str2}` ：这是一个模板字符串，使用反引号包裹。其中 ${str2} 是一个占位符，
// 也称为模板插值，它允许在字符串中嵌入 JavaScript 表达式。在运行时，JavaScript 引擎会将 ${str2}
//  替换为变量 str2 的实际值。
const str3 =`hello ${str2}`; 
console.log(str3);

console.log(5+'8');// 58
console.log(5-'8');// -3
console.log('8'-5); // 3
console.log('8'+'8');// 88
console.log('8'*'8');// 64
console.log('8'+5);// 85


react