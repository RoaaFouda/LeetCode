1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var threeSum = function(nums) {
6    nums.sort((a, b)=>a-b)
7
8    let ans = [];
9    for(let i = 0; i < nums.length; i++){
10        if(i && nums[i] === nums[i-1])
11         continue;
12        let j = i+1;
13        let k = nums.length-1;
14        while(j < k){
15            if(nums[i]+nums[j]+nums[k] > 0){
16                k--;
17            } else if (nums[i]+nums[k]+nums[j] < 0){
18                j++;
19            } else {
20                ans.push([nums[i], nums[j], nums[k]]);
21                while (nums[j] === nums[j+1] && j<k) j++;
22                j++;
23            }
24        }
25    }
26    return ans;
27    
28};