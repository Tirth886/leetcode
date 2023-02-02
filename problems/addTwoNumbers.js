function ListNode(val) {
    this.val = val;
    this.next = null;
}


function nodeListToArray(lnode = {}, nodes = []) {

    let nodeList = [...nodes]

    nodeList = [...nodeList, lnode.val]

    if (lnode.next === null || lnode.next === undefined || typeof lnode.next === "undefined") return nodeList

    if (typeof lnode.next !== "undefined" && typeof lnode.next === "object") return nodeListToArray(lnode.next, nodeList)

}


function arrayToListNode(list) {
    let listNode, temp;
    for (let index = list.length - 1; index >= 0; index--) {
        if (listNode) {
            temp = listNode;
        }
        listNode = new ListNode(list[index]);
        listNode.next = temp === undefined ? null : temp;
    }
    return listNode
}


function addTwoNumbers(l1, l2) {
    l1 = nodeListToArray(l1, [])
    l2 = nodeListToArray(l2, [])
    let index = 0
    let listLength = 0
    if (l1.length > l2.length) {
        listLength = l1.length
    } else if (l2.length > l1.length) {
        listLength = l2.length
    } else {
        listLength = l1.length
    }
    let output = [], carry = 0
    while (index < listLength) {
        if (l1[index] === undefined) {
            l1[index] = 0
        }
        if (l2[index] === undefined) {
            l2[index] = 0
        }
        output = [...output, parseInt((l1[index]) + l2[index] + carry) % 10]
        carry = parseInt((l1[index] + l2[index] + carry) / 10)
        if (index === listLength - 1 && carry > 0) {
            output = [...output, carry]
        }
        index++
    }
    return arrayToListNode(output)
}

export default addTwoNumbers