function goodPair() {
    const nums = [1, 2, 3, 1, 1, 3]

    let j = 1, i = 0, n = nums.length, match = 0;

    while (i < n) {
        if (i === n) break;

        if (j === n) {
            j = 1;
            i++;
        }
        if (nums[i] == nums[j] && i < j) {
            match++;
        }
        ++j;
    }

    return match
}

export default goodPair;