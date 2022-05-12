const BST = require("./index");

const myTree = new BST();
myTree.insert(10);
myTree.insert(15);
myTree.insert(5);
myTree.insert(50);
myTree.insert(3);
myTree.insert(7);
myTree.insert(12);

// myTree.remove(15); // remove node with two children
// myTree.remove(10); // remove the root node
// myTree.remove(3); // remove leaf node
console.log(myTree.postOrder(myTree.root));
