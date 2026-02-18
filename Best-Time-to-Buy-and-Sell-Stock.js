1/**
2 * @param {number[]} prices
3 * @return {number}
4 [7, 1, 5, 3, 6, 4]
5 */
6var maxProfit = function(prices) {
7    let min = prices[0];
8    let prof = 0;
9   for(let i = 1; i < prices.length; i++){
10    if(prices[i] - min < 0){
11        min = prices[i];
12    } else if (prices[i] - min > prof){
13        prof = prices[i] - min;
14    }
15   }
16
17   return prof;
18    
19
20
21};