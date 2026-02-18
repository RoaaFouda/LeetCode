1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7    if(s.length != t.length) return false;
8    let arr1 = s.split("").sort();
9    let arr2 = t.split("").sort();
10    for(let i = 0; i < s.length; i++){
11        if(arr1[i] !== arr2[i])
12            return false;
13    }
14
15    return true;
16};