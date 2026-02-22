1/**
2 * @param {number[][]} intervals
3 * @return {number[][]}
4 */
5var merge = function(intervals) {
6    intervals.sort((a, b)=>a[0]-b[0]);
7    let ans = [];
8    ans.push(intervals[0]);
9    for(let i = 0; i < intervals.length; i++){
10        if(ans[ans.length-1][0] <= intervals[i][0] && ans[ans.length-1][1] >= intervals[i][0])
11            {
12                let start = Math.min(ans[ans.length-1][0], intervals[i][0]);
13                let end = Math.max(ans[ans.length-1][1], intervals[i][1]);
14
15                ans[ans.length-1] = [start, end];
16            } else {
17                ans.push(intervals[i]);
18            }
19    }
20
21    return ans;
22};