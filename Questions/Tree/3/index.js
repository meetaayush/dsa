const BST = require("../../../DataStructures/Tree/bst");

function findHeight(rootNode) {
    if (!rootNode) {
        return 0;
    }
    if (!rootNode.left || !rootNode.right) {
        return 0;
    }
    const leftHeight = findHeight(rootNode.left);
    const rightHeight = findHeight(rootNode.right);

    if (leftHeight > rightHeight) {
        return leftHeight + 1;
    } else {
        return rightHeight + 1;
    }
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
myTree.insert(11);
myTree.insert(15);
myTree.insert(18);
myTree.insert(17);

const height = findHeight(myTree.root);
console.log(height)