const Stack = require("../../../DataStructures/Stack/with_Array");

function evaluatePostfix(expression) {
    const length = expression.length,
        myStack = new Stack();
    for (let i = 0; i < length; i++) {
        if (isNaN(parseInt(expression[i], 10))) {
            const operand = expression[i];
            const operator2 = myStack.pop();
            const operator1 = myStack.pop();
            const result = eval(`${operator1} ${operand} ${operator2}`);
            myStack.push(result);
        } else {
            myStack.push(expression[i]);
        }
    }
    return myStack.getTop();
}

console.log(evaluatePostfix("921*-8-4+"));
