function richestValue() {
    const accounts = [[1, 2, 3], [3, 2, 1]]
    return Math.max(...accounts.map(e => {
        return e.reduce((v, c) => v + c, 0)
    }))

}

export default richestValue