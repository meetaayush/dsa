const BST = require("./index");

const myTree = new BST();
myTree.insert(3);
myTree.insert(5);
myTree.insert(7);
myTree.insert(4);
myTree.insert(1);

console.log(myTree.lookup(50))