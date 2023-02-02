function numberofSameValueCount() {
    // Counting Reduntant value Without using nested loop
    // couning only the value for those having the same values
    // Expected Out Put { 1 : 1, 2 : 2  }
    const a = [1, 2, 4];
    const b = [1, 2, 2];
    const length = a.length
    let i = 0,
        j = 0,
        state = false;
    let response = {};
    for (; i < length;) {
        state = false;
        
        if (a[i] === b[j]) typeof response[a[i]] === "undefined" ? (response[a[i]] = 1) : response[a[i]] += 1
        
        if ((j + 1) === length) {
            j = 0;
            state = true;
            i += 1;
        }
        if (!state) j += 1;
    }
    console.log(response)
}

export default numberofSameValueCount
    // Counting Reduntant value Without
    // couning only the value for those having the same values using nested loop
    // Expected Out Put { 1 : 1, 2 : 2  }