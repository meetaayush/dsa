const LinkedList = require("../1");

LinkedList.prototype.intersection = function (list2) {
    let currentElement = list2.getHead();
    const result = new LinkedList();
    while (currentElement !== null) {
        if (this.search(currentElement.value)) {
            // value exist in list1
            result.push(currentElement.value);
        }
        currentElement = currentElement.next;
    }
    return result;
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

const intersection = list1.intersection(list2);
console.log(intersection.printList());
