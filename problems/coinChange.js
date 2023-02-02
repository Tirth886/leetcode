
function multiDimensionalUnique(arr) {
    var uniques = [];
    var itemsFound = {};
    for (var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if (itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}

function coinChange() {

    const coins = [1, 2, 4], target = 4, combination = [];

    let finalCombination = new Set();

    if (target == 0) return []

    for (var i = 0; i < coins.length; i += 1) {
        if ((target % coins[i]) == 0) {
            finalCombination.add(new Array((target / coins[i])).fill(coins[i]))
        }
        for (var j = i; j < coins.length; j += 1) {
            let combinationArr = [coins[i], coins[j]]
            combinationArr.sort()
            combination.push(combinationArr);
        }
    }
    // return combination;
    for (let i = 0; i < combination.length; i++) {

        for (let j = 0; j < combination.length; j++) {

            let firstPair = combination[i].reduce((a, b) => a + b, 0)

            let secondPair = combination[j].reduce((a, b) => a + b, 0)

            let firstDiff = target - firstPair

            let secondDiff = target - secondPair

            if (firstPair === target) {
                if (!finalCombination.has(combination[i])) {
                    finalCombination.add(combination[i])
                }
            }
            if (secondPair === target) {
                if (!finalCombination.has(combination[j])) {
                    finalCombination.add(combination[j])
                }
            }
            if ((firstPair + secondPair) === target) {
                let combinationArr = combination[i].concat(combination[j])
                combinationArr.sort()
                if (!finalCombination.has(combinationArr)) {
                    finalCombination.add(combinationArr)
                }
            }
            if (firstDiff > 0) {
                if (coins.includes(firstDiff)) {
                    let c = coins.indexOf(firstDiff)
                    let combinationData = [...combination[i]]
                    combinationData.push(c)
                    let sumData = combinationData.reduce((a, b) => a + b, 0);
                    if (sumData !== target) combinationData.pop()

                    combinationData.sort()
                    if (sumData === target) finalCombination.add(combinationData)
                }
            }
            if (secondDiff > 0) {
                if (coins.includes(secondDiff)) {
                    let c = coins.indexOf(secondDiff)
                    let combinationData = [...combination[i]]
                    combinationData.push(coins[c])
                    let sumData = combinationData.reduce((a, b) => a + b, 0);
                    if (sumData !== target) combinationData.pop()
                    combinationData.sort()
                    if (sumData === target) finalCombination.add(combinationData)
                }
            }
        }
    }

    return multiDimensionalUnique([...finalCombination])


    // const coins = [1, 2, 3], Sum = 4
    // let dp = new Array(Sum + 1).fill(0)
    // dp[0] = 1;
    // // console.log(dp)
    // for (let i = 0; i < coins.length; i++) {
    //     for (let j = coins[i]; j < dp.length; j++) {
    //         dp[j] += dp[j - coins[i]];
    //     }
    // }
    // return dp[Sum];
}


export default coinChange
