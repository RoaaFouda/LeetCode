1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    // First approach
8    // let sorted = nums.toSorted((a, b) => a-b);
9    // let start = 0;
10    // let end = nums.length -1;
11
12    // while(start < end){
13    //     if(sorted[start] + sorted[end] > target){
14    //         end--;
15    //     } else if (sorted[start] + sorted[end] < target){
16    //         start++;
17    //     } else {
18    //         return [nums.indexOf(sorted[start]), nums.lastIndexOf(sorted[end])]
19    //     }
20    // }
21
22    // Second approach
23
24    let m = new Map();
25    for(let i = 0; i < nums.length; i++){
26        let n = target - nums[i];
27        if(m.has(n)){
28            return [m.get(n), i];
29        }
30        m.set(nums[i], i)
31    }
32};