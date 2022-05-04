const Node = require("./Node");

module.exports = class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.value < value) {
                    // Go right
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                } else {
                    // Go left
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
    }

    lookup(value) {
        if (this.root === null) {
            return null;
        }
        let currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            } else if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return null;
    }

    remove(value) {
        // Todo: by jaan
    }
}