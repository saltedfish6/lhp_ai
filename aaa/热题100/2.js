/**
 * 将字符串数组中的异位词进行分组。
 * @param {string[]} strs - 输入的字符串数组。
 * @returns {string[][]} - 分组后的二维数组，每个子数组包含一组异位词。
 * 输入：strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 */
var groupAnagrams = (strs)=> {
    // 创建一个 Map 对象，用于存储分组信息
    // 键是排序后的字符串，值是包含对应异位词的数组
    const map = new Map();
    // 遍历输入的字符串数组
    for (let str of strs) {//strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
        // 将当前字符串转换为字符数组
        let array = Array.from(str);//array = ["e", "a", "t"]
        // 对字符数组进行排序
        array.sort();//输出：["a", "e", "t"]
        // 将排序后的字符数组转换为字符串，作为 Map 的键
        let key = array.toString();//key = "a,e,t"
        // 检查 Map 中是否存在该键
        // 如果存在，则获取对应的数组；如果不存在，则创建一个新的数组
        let list = map.get(key) ? map.get(key) : new Array();//输出：[["e", "a", "t"]]
        // 将当前字符串添加到对应的数组中
        list.push(str);//输出：[["e", "a", "t"],["e", "a", "t"]]
        // 将更新后的数组存储到 Map 中
        map.set(key, list);
    }
    // 将 Map 中的所有值提取出来，组成一个二维数组并返回
    return Array.from(map.values());
};

