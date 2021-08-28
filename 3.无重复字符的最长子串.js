/**
 * @param {string} s
 * @return {number}
 */
//输入: s = "abcabcbb"
const lengthOfLongestSubstring = function(s) {
    let str = s[0] //a
    let max = 1
    if (s === ' '){
        return 0
    }else{
        for (let i =1;i<s.length;i++){
            if (str.indexOf(s[i]) !== -1){//判断str中有s[i]这个字符串
                //如果有
                str = str.slice(str.indexOf(s[i])+1)
            //    str.indexOf(s[i])  为str中s[i]的位置
            //    .slice(  +1)  为取str中
            }else {
                //如果没有,把s[i]加入str
                str = str + s[i]
                if (max<str.length){
                    max = str.length
                }
            }
        }
        return max
    }
};
// lengthOfLongestSubstring("abcabcbb")
console.log(lengthOfLongestSubstring(" abcccc"))
