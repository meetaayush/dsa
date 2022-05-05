const LinkedList = require("../1");

LinkedList.prototype.union = function (list2) {
    let currentElement = list2.getHead();
    while (currentElement !== null) {
        if (!this.search(currentElement.value)) {
            // value doesn't exist in list1
            this.push(currentElement.value);
        }
        currentElement = currentElement.next;
    }
    return this;
};

// Test
const list1 = new LinkedList();
const list2 = new LinkedList();

list1.push(10);
list1.push(20);
list1.push(80);
list1.push(60);

list2.push(15);
list2.push(20);
list2.push(30);
list2.push(60);
list2.push(45);

const union = list1.union(list2);
console.log(union.printList());
