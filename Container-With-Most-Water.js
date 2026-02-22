1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function(height) {
6    let l = 0;
7    let r = height.length-1;
8    let mxArea = (r - l)*Math.min(height[l], height[r]);
9    while(l < r){
10        
11        if(height[l] < height[r]){
12            l++;
13        } else {
14            r--;
15        }
16
17        mxArea = Math.max(mxArea, (r - l)*Math.min(height[l], height[r]));
18
19    }
20
21    return mxArea;
22};