// 数组对象
const arr = ['1','2','3'];
console.log(typeof arr);
const date = new Date();
console.log(date);
console.log(typeof Object.prototype.toString.call(date));

// 会在MDN 文档看一些资料
function getType(value){
    // string api的选择
    // split 分割 + substring 截取
    // slice 截取
    return Object.prototype.toString.call(value).slice(8,-1);
}

console.log(getType(arr));