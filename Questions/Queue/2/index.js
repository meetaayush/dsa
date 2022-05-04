const Stack = require("../../../DataStructures/Stack/with_Array");

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value) {
        this.stack1.push(value);
    }
    dequeue() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    isEmpty() {
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }
    size() {
        return this.stack1.size() + this.stack2.size();
    }
    getFront() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.list[this.stack2.size() - 1];
    }
}

// Test
const myQueue = new Queue();
myQueue.enqueue(3);
myQueue.enqueue(5);
myQueue.enqueue(7);
myQueue.enqueue(9);
// console.log(myQueue.dequeue())
console.log(myQueue.getFront())