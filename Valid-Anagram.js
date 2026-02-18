1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7    // if(s.length != t.length) return false;
8    // let arr1 = s.split("").sort();
9    // let arr2 = t.split("").sort();
10    // for(let i = 0; i < s.length; i++){
11    //     if(arr1[i] !== arr2[i])
12    //         return false;
13    // }
14
15    // return true;
16
17    if(s.length != t.length) return false;
18    let fs = new Array(26).fill(0);
19    let ft = new Array(26).fill(0);
20    for(let i = 0; i < s.length; i++){
21        fs[s.charCodeAt(i)-97]++;
22        ft[t.charCodeAt(i)-97]++;
23    }
24
25    for(let i = 0; i < ft.length; i++){
26        if(ft[i] != fs[i])
27        return false
28    }
29
30    return true;
31
32};