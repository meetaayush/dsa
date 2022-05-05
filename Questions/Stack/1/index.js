const Stack = require("../../../DataStructures/Stack/with_Array");

Stack.prototype.sort = function () {
    const tempStack = new Stack();
    while (!this.isEmpty()) {
        let pivot = this.pop();
        if (tempStack.isEmpty()) {
            tempStack.push(pivot);
            pivot = null;
        } else {
            // pop values from tempStack until you find an element smaller than pivot
            let topOfTempStack = tempStack.getTop(),
                count = 0;
            while (!(topOfTempStack < pivot) && !tempStack.isEmpty()) {
                this.push(tempStack.pop());
                count++;
                topOfTempStack = tempStack.getTop();
            }
            // push the pivot element to tempStack
            tempStack.push(pivot);
            // push back all the popped elements back to tempStack
            while (count > 0 && !this.isEmpty()) {
                tempStack.push(this.pop());
                count--;
            }
        }
    }
    // push all the elements from tempStack back to main Stack
    while (!tempStack.isEmpty()) {
        this.push(tempStack.pop());
    }
    return this;
};

// Test
const myStack = new Stack();
const arr = [23, 60, 12, 42, 4, 97, 2];
arr.reverse().forEach((item) => myStack.push(item));
myStack.sort();
console.log(myStack);
