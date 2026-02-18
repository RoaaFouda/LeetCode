1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6    // let m = new Map();
7    // for(let i = 0; i < strs.length; i++){
8    //     m.set(strs[i].split("").sort().join(""), []); // map doesnt allow duplicate keys, it  //     it overrides
9    // }
10
11    // for(let i = 0; i < strs.length; i++){
12    //  m.get(strs[i].split("").sort().join("")).push(strs[i]);
13    // }
14
15
16    // return [...m.values()];
17    let m = new Map();
18    for(let i = 0; i < strs.length; i++){
19        let sortedKey = strs[i].split("").sort().join("")
20        if(m.has(sortedKey))
21            m.get(sortedKey).push(strs[i]);
22        else
23            m.set(sortedKey, [strs[i]]);
24    }
25
26
27    return [...m.values()];
28
29};