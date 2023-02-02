function arithmeticTriplet() {
    const nums = [0, 1, 4, 6, 7, 10];
    const diff = 3;
    let count = 0;
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true;
    }
    console.log(map)
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i] - diff, `(${nums[i]},${diff})`, `&&`, nums[i] + diff, `(${nums[i]},${diff})`)
        if (map[nums[i] - diff] && map[nums[i] + diff]) {
            count++;
        }
    }

    return count;

}

export default arithmeticTriplet;