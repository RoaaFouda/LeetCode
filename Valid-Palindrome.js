1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    s = s.split("");
7    let news="";
8    for(let i = 0; i < s.length; i++){
9        if(s[i].toLowerCase().charCodeAt(0) >= 97 && s[i].toLowerCase().charCodeAt(0) <= 122 || (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57))
10         news+=s[i].toLowerCase();
11    }
12
13    return (news.split("").reverse().join("") === news)
14    
15
16};