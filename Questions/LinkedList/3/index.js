const LinkedList = require("../../../DataStructures/LinkedList");

LinkedList.prototype.detectCycle = function () {
    let slowP = this.getHead(), fastP = this.getHead();

    while (slowP !== null && fastP !== null && fastP.next !== null) {
        slowP = slowP.next;
        fastP = fastP.next.next;

        if (slowP === fastP) {
            return true;
        }
    }
    return false;
}

// Test

const myList = new LinkedList();
myList.push(3);
myList.push(1);
myList.push(8);
myList.push(5);
console.log(myList.detectCycle())