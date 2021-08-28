//给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

/*
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
[1,2,3,4,5,6,7,8,9]
3 5 7 9
2 3 4 5
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1,...nums2]
    arr.sort(function(a,b){ // 这是比较函数
        return a - b;    // 升序
    })
    console.log(arr.length % 2 === 1)
    if (arr.length % 2 === 1) {
        console.log(1)
        return  arr[Math.floor(arr.length / 2)]
    }else if(arr.length === 2){
        console.log(2)
        return (arr[0]+arr[1])/2
    } else {
        const num = arr.length / 2
        console.log(3)
        return (arr[num] + arr[num  - 1]) / 2
    }
};

console.log(findMedianSortedArrays([1,10],[3,4]))