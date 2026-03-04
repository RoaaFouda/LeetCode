1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function(s) {
6
7    let ls = {};
8    let ss = 0;
9    let ans = 0;
10
11    for(let e = 0; e < s.length; e++){
12        let c = s[e];
13        if(ls[c] !== undefined && ls[c] >=ss ){
14            ss = ls[c] +1;
15        }
16        ans = Math.max(ans, e-ss+1);
17        ls[c] = e;
18    }
19
20
21    return ans
22};