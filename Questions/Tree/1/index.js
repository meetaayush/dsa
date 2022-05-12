const BST = require("../../../DataStructures/Tree/bst");

function kthSmallest(tree, k) {
    const arr = [];
    tree.inOrderTraverse(tree.root, arr);
    if (arr.length - k >= 0 && k > 0) {
        // for kth largest element use below
        // return arr[arr.length - k];

        // for kth smallest element use below
        return arr[k];
    }
}

function kthMax(tree, k) {
    const arr = [];
    tree.inOrderTraverse(tree.root, arr);
    if (arr.length - k >= 0 && k > 0) {
        // for kth largest element use below
        return arr[arr.length - k];
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

const max = kthMax(myTree, 3);
console.log(max)