1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var productExceptSelf = function(nums) {
6    let pre = new Array(nums.length).fill(1);
7    let suf = new Array(nums.length).fill(1);
8
9    for(let i = 1; i < nums.length; i++){
10        pre[i] = pre[i-1]*nums[i-1];
11    }
12
13    for(let i = nums.length-2; i >= 0; i--){
14        suf[i] = suf[i+1]*nums[i+1]
15    }
16
17    let ans = [];
18
19    for(let i = 0; i < nums.length; i++){
20        ans.push(suf[i]*pre[i]);
21    }
22    return ans;
23};