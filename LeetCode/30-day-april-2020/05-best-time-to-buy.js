/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let tranInProgress = false;
    let buyPrice;
    let sellPrice;

    for (let i = 1; i < prices.length; i++) {
      if (prices[i - 1] > prices[i]) {
        if (tranInProgress) {
          sellPrice = prices[i - 1];
          profit += (sellPrice - buyPrice);
          tranInProgress = false;
        }
      } else {
        if (!tranInProgress)
          buyPrice = prices[i - 1];
          tranInProgress = true;
      }
    }

    if (tranInProgress) {
      sellPrice = prices[prices.length - 1];
      profit += (sellPrice - buyPrice);
    }

    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));