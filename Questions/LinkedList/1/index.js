const LinkedList = require("../../../DataStructures/LinkedList");

LinkedList.prototype.search = function (value) {
    if (this.isEmpty()) {
        return false;
    }
    let currentElement = this.head;
    while (currentElement !== null) {
        if (currentElement.value === value) {
            return true;
        }
        currentElement = currentElement.next;
    }
    return false;
}

const myList = new LinkedList();

// Test
myList.push(3);
myList.push(5);
myList.push(7);
myList.push(9);
myList.push(1);

console.log(myList.search(2))