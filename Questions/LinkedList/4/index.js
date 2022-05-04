const LinkedList = require("../../../DataStructures/LinkedList");

LinkedList.prototype.findMid = function () {
    let count = 1, currentElement = this.head, mid = 0;
    if (this.length % 2 === 0) {
        // Even length
        mid = this.length / 2;
    } else {
        // Odd length
        mid = parseInt(this.length / 2) + 1;
    }
    while (count !== mid) {
        currentElement = currentElement.next;
        count++;
    }
    return currentElement.value;
}

//  Test
const myList = new LinkedList();
myList.push(7);
myList.push(14);
myList.push(10);
myList.push(21);
myList.push(22);

console.log(myList.findMid());