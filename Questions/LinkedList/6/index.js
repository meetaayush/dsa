const LinkedList = require("../../../DataStructures/LinkedList");

LinkedList.prototype.removeDuplicates = function () {
    if (this.isEmpty()) {
        return false;
    }
    let currentElement = this.head;
    // Keep a track of visited nodes
    const visitedHeap = { [currentElement.value]: true };

    while (currentElement.next !== null) {
        if (visitedHeap[currentElement.next.value]) {
            currentElement.next = currentElement.next.next;
        } else {
            visitedHeap[currentElement.next.value] = true;
            currentElement = currentElement.next;
        }
    }
    return this;
};

// Test
const myList = new LinkedList();
myList.push(7);
myList.push(14);
myList.push(21);
myList.push(14);
myList.push(7);
myList.push(22);

console.log("Original List = ", myList.printList());
myList.removeDuplicates();
console.log("Modified list = ", myList.printList());
