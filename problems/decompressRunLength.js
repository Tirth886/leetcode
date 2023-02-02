function decompressRunLength() {
    const nums = [1, 2, 3, 4]
    const result = new Array();
    for (let i = 0; i < nums.length - 1; i += 2) {
        result.push(...Array(nums[i]).fill(nums[i + 1]))
    }
    return result;
}
export default decompressRunLength