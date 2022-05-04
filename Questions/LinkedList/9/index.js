const LinkedList = require("../1");

LinkedList.prototype.findNth = function (n) {
    // nth node from end => (length - n) from begining
    let count = 0,
        currentElement = this.head;
    while (currentElement !== null && count < this.length - n) {
        currentElement = currentElement.next;
        count++;
    }
    return currentElement;
};

// Test
const list1 = new LinkedList();
list1.push(22);
list1.push(18);
list1.push(60);
list1.push(78);
list1.push(47);
list1.push(39);
list1.push(99);

console.log(list1.findNth(3));
