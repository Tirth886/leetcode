function largestLocalVariable() {
    const grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]];
    const row = grid.length - 2;
    const col = grid[0].length - 2;
    let output = Array.from(Array(row).fill(0), () => new Array(col).fill(0));
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            output[i][j] = gmax(grid, i, j);
        }
    }
    function gmax(arr = [], k, l) {
        let max = 0;
        console.log("oside", k, l)
        console.log("osidec", k + 3, l + 3)
        for (let i = k; i < k + 3; i++) {
            for (let j = l; j < l + 3; j++) {
                console.log("iside", i, j, arr[i][j])
                if (arr[i][j] > max) {
                    max = arr[i][j];
                }
            }
        }

        return max;
    }
    return output;
}

export default largestLocalVariable;