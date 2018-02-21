// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    currentCost = [50,25,10,5,1]
    let coins = [0, 0, 0, 0, 0]
    let litterals = ["H","Q","D","N","P"]
    if (currency <= 0) {
        return {}
    }
    else if(currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else {
        for (let i = 0; i <= currentCost.length; i++) {
            while (currency - currentCost[i] >= 0) {
                currency -= currentCost[i]
                coins[i]++
            }
        }
    }
    let answer = {}
    for (let i = 0; i <= coins.length; i++) {
        if (coins[i] > 0) {
            tmpLitteral = litterals[i]
            answer[tmpLitteral] = coins[i]
        }
    }
    return answer
}
