// 给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//nums = [2,7,11,15], target = 9

// const twoSum = function(nums, target) {
//     let arr = []
//     for (let i=0;i<nums.length;i++){
//         for (let j=i+1;j<nums.length;j++){
//             if (nums[i]+nums[j] === target){
//                 return arr=[i,j]
//             }
//         }
//     }
// };
/*
初始化Map，Map的方法
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

* */
// const twoSum = function (nums,target){
//
//     const map = new Map();
//     for(let i = 0;i < nums.length;i++){
//         map.set(nums[i],i);
//     }
//     // console.log(map)// [[3,1],[2,2],[4,3]]
//     for(let i = 0;i < nums.length;i++){
//         const diff = target - nums[i];
//         if(map.has(diff) && map.get(diff) !== i){
//             return [i,map.get(diff)];
//         }
//     }
// }
//nums = [2,3,2,4], target = 6
const twoSum = function (nums,target){
    const map = new Map()
    for (let i = 0;i < nums.length;i++){
        const num1 = nums[i];
        const num2 = target - nums[i];
        if(map.has(num2)){
            return [map.get(num2),i];
        }else{
            map.set(num1,i);
        }
    }
}

// twoSum( [3,3,2,4],  6)

console.log(twoSum( [2,3,3,4],  6))