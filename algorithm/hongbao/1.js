/**
 * @param {number} total
 * @param {number} num 
 * @return {number[]}
 */
function honbao(total,num){
    const arr=[];
    // - 公平性
    // 平均值
    let restAmount = total;//剩余金额
    let restNum = num; //剩余个数
    for(let i=0;i<num-1;i++){
        // Math
        // 包装类
        let amount = (Math.random()*(restAmount/restNum*2)).toFixed(2);//随机金额
        restAmount -= amount; //剩余金额
        restNum--; //剩余个数
        arr.push(amount);
    }
         arr.push(restAmount.toFixed(2));
    return arr;
}
console.log(honbao(100,10));