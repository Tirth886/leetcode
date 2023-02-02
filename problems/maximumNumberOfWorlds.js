function maximumNumberOfWorlds() {
    const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
    let maxWord = 0;
    function splitString(string) {
        if (string.length == 0) return 0;
        let wordCount = 1;
        for (let i = 0; i < string.length; i++) {
            if (string[i] == " ") {
                wordCount++;
            }
        }
        return wordCount;
    }

    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = splitString(sentences[i])
        if (i == 0) {
            maxWord = sentences[i]
        }
        if (sentences[i] > maxWord) {
            maxWord = sentences[i];
        }
    }

    return maxWord
}

export default maximumNumberOfWorlds