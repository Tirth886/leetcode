function kidsWithCandies() {
    let candies = [2, 3, 5, 1, 3]
    const extraCandies = 3
    let max = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        candies[i] = (candies[i] + extraCandies) >= max
    }
    return candies;
}

export default kidsWithCandies;