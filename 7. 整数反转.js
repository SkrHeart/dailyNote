/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    if (x < 0){
        let y = `${x * -1}`
        y = y.split('').reverse().join('')
        if (-Math.pow(2,31)>(-Number(y))){
            return 0
        }
            return -Number(y)
    }
        let y = `${x}`
        y = y.split('').reverse().join('')
        if ((Math.pow(2,31)-1) < Number(y)){
            return 0
        }
            return Number(y)
};

console.log(reverse(1534236469))