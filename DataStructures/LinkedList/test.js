const LinkedList = require("./index");

const myList = new LinkedList();
myList.push(3)
myList.push(5)
myList.push(7)
myList.push(9)
myList.removeFromHead()
console.log(myList);