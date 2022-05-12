const BST = require("../../../DataStructures/Tree/bst");

function findKthNodes(rootNode, k, nodes) {
    if (!rootNode) {
        return false;
    }
    if (k === 0) {
        nodes.push(rootNode.value);
        return nodes;
    }
    findKthNodes(rootNode.left, k - 1, nodes)
    findKthNodes(rootNode.right, k - 1, nodes)
    return nodes;
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

const nodes = [];
const allNodes = findKthNodes(myTree.root, 2, nodes);
console.log(allNodes);