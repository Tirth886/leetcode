function arrayFromPermutation() {
    const nums = [0, 2, 1, 5, 3, 4]

    return nums.map((e, i) => nums[nums[i]]);

    // const n = nums.length;
    // for (let i = 0; i < n; ++i) {
    //     nums[i] += n * (nums[nums[i]] % n);
    // }
    // for (let i = 0; i < n; ++i) {
    //     nums[i] = Math.floor(nums[i] / n);
    // }
    // return nums;
}


export default arrayFromPermutation