1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function(nums) {
6    let k = 1;
7    let i = 0;
8
9    for(let i = 0; i < nums.length; i++){
10        if(i && nums[i] != nums[i-1]){
11            nums[k] = nums[i];
12            k++;
13        }
14    }
15    return k;
16};