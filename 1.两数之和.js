/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//nums = [2,7,11,15], target = 9
const twoSum = function(nums, target) {
    let arr = []
    for (let i=0;i<nums.length;i++){
        for (let j=i+1;j<nums.length;j++){
            if (nums[i]+nums[j] === target){
                return arr=[i,j]
            }
        }
    }
};


console.log(twoSum( [3,2,4],  6))