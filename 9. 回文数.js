/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome1 = function(x) {
    if (x<0){
        return false
    }
    const str = `${x}`
    const num = str.split('').reverse().join('')
    return num === str
};

console.log(isPalindrome(121))