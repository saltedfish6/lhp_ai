// 申明了一个对象常量
// 内存中开辟了一个空间，里面存放了一个对象
// hxt 取址 & 变量名是地址的标记
// js是弱类型语言，变量类型可以随时改变
// = 赋值 object
// 对象字面量(字面意义上) JSON
// Js 太灵活，不需要new,通过{}创建对象 []创建数组

const hxt ={
    name:'黄新天',
    age:20,
    tall: 187,
    hometown:'山东临沂',
    isSingle:true
};

const pyc ={
  
    // 姓名，字符串类型
    name:'彭奕淳',
    // 年龄，数值类型
    age:21,
    // 家乡，字符串类型
    hometown:'新余',
    // 是否单身，布尔类型
    isSingle:true,
    // 送花方法，接受一个girl对象作为参数
    sendFlower:function (girl){
        // 在控制台输出送花信息
        console.log(pyc.name+'给'+girl.name+'送了99朵玫瑰');
        // this关键字指向当前对象，this.name等价于this['name']
        girl.receiveFlower(pyc);
    }
}

const xm={
    xq:30,
    name:'小美',
    room:'408',
    receiveFlower:function (sender){
        console.log(this.name+'收到了'+sender.name+'送的99朵玫瑰');
      if(xm.xq>90){
        console.log('硕果走一波');
       
      }else{
        console.log('gun...');
      }
    }
}
//帮彭老板的  小美的闺蜜
const xh={
    xq:30,
    room:'408',
    name:'小红',
    hometown:'新余',// 老乡
    // 送小美, 送小红,都具有receiveFlower 方法
    // 对象互换
    // 接口 interface  
    receiveFlower:function (sender){
        // if (sender.name==='彭奕淳'){
        //     console.log('我们在一起吧');
        //     return;
        // }
        setTimeout(()=>{//定时器
            xm.xq=99;
            xm.receiveFlower(sender);
        },3000);
        // xm.receiveFlower(sender);
    }
}

pyc.sendFlower(xh);// 调用方法 函数
