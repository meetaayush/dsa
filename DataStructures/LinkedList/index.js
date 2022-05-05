const Node = require("./node");

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }
        if (this.length === 1) {
            const elementToRemove = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return elementToRemove;
        } else {
            // traverse to the second last node
            let currentElement = this.head;
            while (currentElement.next.next !== null) {
                currentElement = currentElement.next;
            }
            const elementToRemove = currentElement.next;
            currentElement.next = null;
            this.tail = currentElement;
            this.length--;
            return elementToRemove;
        }
    }

    insertAtHead(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
        if (this.length === 0) {
            return null;
        }
        if (this.length === 1) {
            const elementToRemove = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return elementToRemove;
        } else {
            const elementToRemove = this.head;
            this.head = this.head.next;
            this.length--;
            return elementToRemove;
        }
    }

    getHead() {
        return this.head;
    }

    setHead(newHead) {
        this.head = newHead;
        return this;
    }

    printList() {
        const list = [];
        let currentElement = this.head;
        while (currentElement !== null) {
            list.push(currentElement.value);
            currentElement = currentElement.next;
        }
        return list;
    }
};
