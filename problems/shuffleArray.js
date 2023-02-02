function suffleArray() {
    let nums = [2, 5, 1, 3, 4, 7]
    const n = 3

    if (nums.length < 1) return [];

    const data = [];

    for (let i = 0; i < n; i++) {
        data.push(nums[i], nums[n + i])
    }


    // const data = {
    //     x: nums.slice(startIndex, secondHalf),
    //     y: nums.slice(secondHalf, numLen)
    // }


    // let index = [];
    // for (let i = 0; i < n; i++) {
    //     index.push(data.x[i], data.y[i])
    // }
    return data;
}

export default suffleArray;