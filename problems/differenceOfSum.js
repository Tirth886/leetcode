function differenceOfSum() {
    const nums = [3, 6, 15, 14, 17, 12, 9, 9, 15, 3, 13, 5, 18, 13, 18, 17, 5, 14, 7, 20];
    let [s, as] = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        s += nums[i];
        do {
            as += nums[i] % 10;
            nums[i] = ~~(nums[i] /= 10);
        }
        while (nums[i])
    }
    return Math.abs(Math.floor(as) - s)
}
export default differenceOfSum;