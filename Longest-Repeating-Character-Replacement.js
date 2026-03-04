1/**
2 * @param {string} s
3 * @param {number} k
4 * @return {number}
5 */
6var characterReplacement = function(s, k) {
7    let freq = {};
8    let res = 0, l = 0, mxFreq = 0;
9    for (let r = 0; r < s.length; r++) {
10        freq[s[r]] = (freq[s[r]] || 0) + 1;
11        mxFreq = Math.max(mxFreq, freq[s[r]]);
12        while ((r-l + 1) - mxFreq > k) {
13            freq[s[l]] -= 1;
14            l++;
15        }
16        res = Math.max(res, r-l+ 1);
17    }
18    return res;
19};