function countMatches() {
    const items =
        [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]]
    const ruleKey = "color", ruleValue = "silver";
    let itmesObj = {
        "type": 0,
        "color": 1,
        "name": 2,
    };
    return items.filter(i => i[itmesObj[ruleKey]] == ruleValue).length
    
    // for (let i = 0; i < items.length; i++) {
        //     let itemIndex = -1;
        //     switch (ruleKey) {
        //         case "type":
        //             itemIndex = 0;
        //             break;
        //         case "color":
        //             itemIndex = 1;
        //             break;
        //         case "name":
        //             itemIndex = 2;
        //             break;
        //     }
    //     if (items[i][itemIndex] === ruleValue) {
    //         count++;
    //     }
    // }

    // return count;
}

export default countMatches;