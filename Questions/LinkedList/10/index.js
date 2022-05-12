const LinkedList = require("../../../DataStructures/LinkedList");

const reorderList = (headNode) => {
    // Step 1
    // Find the middle node
    let slowP = headNode, fastP = headNode;
    while (fastP && fastP.next) {
        slowP = slowP.next;
        fastP = fastP.next.next;
    }

    // Step 2
    // Reverse everything after the middle node
    let previousNode = null, currentNode = slowP.next, nextNode = null;
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    slowP.next = null;

    let head1 = headNode, head2 = previousNode;
    while (head2) {
        let nextNode = head1.next;
        head1.next = head2;
        head1 = head2;
        head2 = nextNode;
    }
} 

const myList = new LinkedList();
for (let i = 1; i < 6; i++) {
    myList.push(i);
}

console.log(myList.printList(), "Original")

reorderList(myList.getHead());

console.log(myList.printList(), "Reordered")