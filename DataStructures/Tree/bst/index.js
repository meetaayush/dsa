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

    remove(value, root = this.root) {
        // Base case
        if (root === null) {
            return null;
        }
        let currentNode = root, parentNode = null;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                // Move to the left
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                // Move to the right
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                // Match found
                if (currentNode.left === null && currentNode.right === null) {
                    // Leaf node
                    if (parentNode === null) {
                        return null;
                    }
                    if (parentNode.left === currentNode) {
                        parentNode.left = null;
                    } else {
                        parentNode.right = null;
                    }
                    return root;
                } else if (currentNode.left === null && currentNode.right !== null) {
                    // node with only right child
                    if (parentNode === null) {
                        return null;
                    }
                    if (parentNode.left === currentNode) {
                        parentNode.left = currentNode.right;
                    } else {
                        parentNode.right = currentNode.right;
                    }
                    currentNode.right = null;
                    return root;
                } else if (currentNode.right === null && currentNode.left !== null) {
                    // node with only left child
                    if (parentNode.left === currentNode) {
                        parentNode.left = currentNode.left;
                    } else {
                        parentNode.right = currentNode.left;
                    }
                    currentNode.left = null;
                    return root;
                } else {
                    // Node with both child
                    // Find successor i.e. Smallest element in the right subtree
                    let tempNode = currentNode.right;
                    while (tempNode.left !== null) {
                        tempNode = tempNode.left;
                    }
                    currentNode.value = tempNode.value;
                    // Delete the value from right subtree
                    currentNode.right = this.remove(tempNode.value, currentNode.right);
                    return root;
                }
            }
        }
    }
}