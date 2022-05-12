const Stack = require("../../../DataStructures/Stack/with_Array");

function isBalanced(exp) {
    const parenthesesStack = new Stack();
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === "{" || exp[i] === "[" || exp[i] === "(") {
            parenthesesStack.push(exp[i]);
        } else if (exp[i] === "}") {
            const topElement = parenthesesStack.pop();
            if (topElement !== "{") {
                return false;
            }
        } else if (exp[i] === "]") {
            const topElement = parenthesesStack.pop();
            if (topElement !== "[") {
                return false;
            }
        } else if (exp[i] === ")") {
            const topElement = parenthesesStack.pop();
            if (topElement !== "(") {
                return false;
            }
        }
    }
    if (parenthesesStack.size() > 0) {
        return false;
    }
    return true;
}

const expression = "{([](}"
console.log(isBalanced(expression))