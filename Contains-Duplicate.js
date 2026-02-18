1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    // TLE
7    // nums.forEach((num)=>{
8    //     if(nums.lastIndexOf(num) != nums.indexOf(num))
9    //         return true;
10    // })
11    // first approach
12    // nums.sort((a, b) => a-b)
13    // for(let i = 0; i < nums.length; i++){
14    //     if(nums[i] === nums[i+1])
15    //       return true;
16    // }
17    // return false;
18
19    // second approach
20    let s = new Set(nums);
21    if(s.size != nums.length)
22        return true;
23    return false;   
24};