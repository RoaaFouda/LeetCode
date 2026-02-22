1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function(nums) {
6    let sum = 0;
7    let max = nums[0];
8
9    for(let i = 0; i < nums.length; i++){
10        sum += nums[i];
11    if(i < nums.length-1 && sum < 0 && nums[i+1] > 0){
12        sum = 0;
13    } else if (i < nums.length-1 && sum < 0 && nums[i+1] <= 0 && nums[i+1] > sum){
14        sum = 0;
15    }
16    else if (sum > max)
17        max = sum;
18    }
19    return max;
20};