const LinkedList = require("../../LinkedList");

module.exports = class Queue {
    constructor() {
        this.list = new LinkedList()
    }
    enqueue(value) {
        // add to the end
        this.list.push(value);
        return this.list;
    }
    dequeue() {
        // remove from head;
        const poppedValue = this.list.removeFromHead();
        return poppedValue.value;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    getFront() {
        return this.list.getHead();
    }
    size() {
        return this.list.length;
    }
    printQueue() {
        return this.list.printList();
    }
}