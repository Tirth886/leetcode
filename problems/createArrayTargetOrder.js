function createArrayTargetOrder() {
    const nums = [0, 1, 2, 3, 4];
    const index = [0, 1, 2, 2, 1];
    const result = [];

    for (let i = 0; i < index.length; i++) {
        result.splice(index[i], 0, nums[i])
    }

    return result;
}
export default createArrayTargetOrder