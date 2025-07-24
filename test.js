// Simple calculator function for testing Claude code review
function add(a, b) {
    return a + b;
}

function multiply(x, y) {
    let result = 0;
    for (let i = 0; i < y; i++) {
        result = add(result, x);
    }
    return result;
}

// This function has a potential bug - what happens with negative numbers?
function divide(numerator, denominator) {
    return numerator / denominator; // No zero check!
}

console.log("Calculator ready!");
console.log("5 + 3 =", add(5, 3));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));