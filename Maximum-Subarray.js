1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function(nums) {
6
7    // if (nums.length === 1) return nums[0]
8    // let res = nums[0]
9    // let tmp = 0
10
11    // for(const num of nums) {
12    // Another Approach
13    //     if(tmp < 0) {
14    //         tmp = 0
15            
16    //     }
17
18    //     tmp += num
19    //     res = Math.max(tmp, res)
20    // }
21
22    // return res
23
24    let sum = 0;
25    let max = nums[0];
26
27    for(let i = 0; i < nums.length; i++){
28        sum += nums[i];
29    if(i < nums.length-1 && sum < 0 && nums[i+1] > 0){
30        sum = 0;
31    } else if (i < nums.length-1 && sum < 0 && nums[i+1] <= 0 && nums[i+1] > sum){
32        sum = 0;
33    }
34    else if (sum > max)
35        max = sum;
36    }
37    return max;
38};