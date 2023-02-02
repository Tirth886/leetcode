function decodeXor() {
    const encoded = [1, 2, 3];
    const first = 1;
    let result = [first]
    for (let i = 0; i < encoded.length; i++) {
        result[i + 1] = (result[i] ^ encoded[i]);
    }

    return result;
}

export default decodeXor;