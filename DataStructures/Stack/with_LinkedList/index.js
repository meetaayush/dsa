const LinkedList = require("../../LinkedList");

module.exports = class Stack {
    constructor() {
        this.list = new LinkedList();
    }
    push(value) {
        this.list.push(value); // O(1) operation
        return this.list;
    }
    pop() {
        const poppedValue = this.list.pop(); // O(n) operation
        return poppedValue;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
}