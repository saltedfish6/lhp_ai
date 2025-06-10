const twoSum =(nums,target) =>{
    // 创建一个空对象 temp，用于存储已经遍历过的数字及其索引
    // 键为数字，值为该数字在数组中的索引
    const temp={};
    // 使用 for 循环遍历数组 nums
    for(let i=0;i<nums.length;i++){
        // 获取当前遍历到的数字
        const curNum = nums[i];
        // 计算与当前数字配对的另一个数字，使得两数之和等于目标值
        const complement = target  - curNum;
        // 检查对象 temp 中是否存在配对数字的索引
        const complementIndex = temp[complement];
        // 如果配对数字的索引存在，说明找到了满足条件的两个数
        if(complementIndex !=undefined ){
            // 返回配对数字的索引和当前数字的索引
            return [complementIndex,i];
        }else {
            // 如果配对数字的索引不存在，将当前数字及其索引存入对象 temp 中
            temp[curNum]=i;
        }
    }
}
