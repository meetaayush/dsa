const BST = require("../../../DataStructures/Tree/bst");

// Iterative solution
function findAncestors(rootNode, k) {
    let currentNode = rootNode, ancestors = [];
    while (currentNode.value !== k) {
        ancestors.push(currentNode.value);
        if (currentNode.value < k) {
            currentNode = currentNode.right;
        } else {
            currentNode = currentNode.left;
        }
    }
    return ancestors;
}

// Recurssive Solution
function findAncestorsRec(rootNode, k) {
    const ancestors = [];
    backtrackAncestors(rootNode, ancestors, k);
    return ancestors;
}

function backtrackAncestors(rootNode, ancestors, k) {
    if (!rootNode) {
        return false;
    }
    if (rootNode.value === k) {
        return true;
    }
    if (backtrackAncestors(rootNode.left, ancestors, k)) {
        ancestors.push(rootNode.value);
        return true;
    }
    if (backtrackAncestors(rootNode.right, ancestors, k)) {
        ancestors.push(rootNode.value);
        return true;
    }
    return false;
}

const myTree = new BST();

myTree.insert(6);
myTree.insert(4);
myTree.insert(9);
myTree.insert(2);
myTree.insert(5);
myTree.insert(8);
myTree.insert(12);
myTree.insert(10);
myTree.insert(14);

const ancestors = findAncestorsRec(myTree.root, 10);
console.log(ancestors);