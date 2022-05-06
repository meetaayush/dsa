const Queue = require("../../../DataStructures/Queue/with_LinkedList");
const Stack = require("../../../DataStructures/Stack/with_Array");

function reverseK(queue, k) {
    const queueSize = queue.size();
    const myStack = new Stack();
    for (let i = 0; i < k; i++) {
        myStack.push(queue.dequeue());
    }
    for (let i = 0; i < k; i++) {
        const val = myStack.pop();
        queue.enqueue(val);
    }
    for (let i = 0; i < queueSize - k; i++) {
        queue.enqueue(queue.dequeue())
    }
    return queue;
}

const myQueue = new Queue();
for (let i = 1; i < 11; i++) {
    myQueue.enqueue(i);
}
const reversedQueue = reverseK(myQueue, 5);
console.log(reversedQueue.printQueue());
