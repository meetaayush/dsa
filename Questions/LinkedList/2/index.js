const LinkedList = require("../../../DataStructures/LinkedList");

LinkedList.prototype.reverse = function () {
    let previousElement = null, currentElement = this.head, nextElement = null;
    this.tail = currentElement;
    while (currentElement !== null) {
        nextElement = currentElement.next;
        currentElement.next = previousElement;
        previousElement = currentElement;
        currentElement = nextElement;
    }
    this.setHead(previousElement);
    return this;
}

// Test
const myList = new LinkedList();
myList.push(3);
myList.push(5);
myList.push(7);
myList.push(9);
console.log(myList);
console.log("---------------------")
myList.reverse();
console.log(myList)