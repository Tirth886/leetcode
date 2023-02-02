function runingSumofArray() {
    const nums = [1, 2, 3, 4];
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] + sum
        sum = nums[i];
    }
    return nums;
}
export default runingSumofArray; 