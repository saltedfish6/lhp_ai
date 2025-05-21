//全局的js代码在执行之前会有一个编译的过程，变量提升
console.log(value,'------');
var a;
a = 1;
if(false){
    var value = 1;//申明变量
}
//undefined 有
console.log(value);// undefined