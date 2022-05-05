module.exports = class Stack {
    constructor() {
        this.list = [];
    }
    push(value) {
        this.list.push(value);
        return this.list;
    }
    pop() {
        const poppedValue = this.list.pop();
        return poppedValue;
    }
    getTop() {
        return this.list[this.list.length - 1];
    }
    size() {
        return this.list.length;
    }
    isEmpty() {
        return this.list.length === 0;
    }
};
