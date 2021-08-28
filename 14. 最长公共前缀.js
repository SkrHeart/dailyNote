/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix1 = function(strs) {
    //判断数组中是否只有一个字符串
    if (strs.length < 2){
        return strs[0]
    }
    //找出数组中最小长度的字符串
    let tempStr = strs[0]
    for (let i = 1;i < strs.length;i++){
        strs[i] < tempStr ? tempStr = strs[i] : tempStr
    }
    //遍历数组中每一个字符串，将每个字符串的对应位和最小长度的字符串的对应位进行对比
    let output = ''
    //外层for循环为字符串第几位，内层for循环为数组中第几个字符串
    for (let i = 0;i < tempStr.length;i++){
        for (let j = 0;j < strs.length;j++){
            //判断最短字符串的第i位和数组中每一个字符串的第i位是否相等，若不相等则直接返回结果,若相等则进行下一步
            if (tempStr[i] !== strs[j][i]){
                return output
            }
        }
        //上一个for循环若执行完毕，则将第i位加入到输出字符串中
        output += tempStr[i]
    }
    return output
};

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    //判断数组中是否只有一个字符串
    if (strs.length < 2){
        return strs[0]
    }
    //找出数组中最小长度的字符串

    //strs2Nums.indexOf(Math.min(...strs2Nums))  表示在strs2Nums数组中查找strs2Nums数组中最小的数，并返回最小的数的索引
    //此处索引为1
    // splice(1,1)删除strs中第二个数并返回一个新数组
    const strs2Nums = strs.map(v => v.length);
    let minStr = strs.splice(strs2Nums.indexOf(Math.min(...strs2Nums)), 1)[0];

    //遍历数组中每一个字符串，将每个字符串的对应位和最小长度的字符串的对应位进行对比
    let output = ''
    //外层for循环为字符串第几位，内层for循环为数组中第几个字符串
    for (let i = 0;i < minStr.length;i++){
        for (let j = 0;j < strs.length;j++){
            //判断最短字符串的第i位和数组中每一个字符串的第i位是否相等，若不相等则直接返回结果,若相等则进行下一步
            if (minStr[i] !== strs[j][i]){
                return output
            }
        }
        //上一个for循环若执行完毕，则将第i位加入到输出字符串中
        output += minStr[i]
    }
    return output
};

console.log(longestCommonPrefix(['aaasasasc','aaac','awda']))


const tempfun = function (strs){
    const strs2Nums = strs.map((v) => {
       return v.length
    });
console.log(...strs2Nums)
    //strs2Nums.indexOf(Math.min(...strs2Nums))  表示在strs2Nums数组中查找strs2Nums数组中最小的数，并返回最小的数的索引
    //此处索引为1
    // splice(1,1)删除strs中第二个数并返回一个新数组
    let minStr = strs.splice(strs2Nums.indexOf(Math.min(...strs2Nums)), 1)[0];
    // let i = minStr.length;
    let maxMatchStr = minStr;

    return minStr
}

