1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6    let m = new Map();
7    for(let i = 0; i < strs.length; i++){
8        m.set(strs[i].split("").sort().join(""), []);
9    }
10
11    for(let i = 0; i < strs.length; i++){
12     m.get(strs[i].split("").sort().join("")).push(strs[i]);
13    }
14
15    let ans = [];
16    for (const value of m.values()) {
17        ans.push(value);
18    }
19
20    return ans;
21
22};