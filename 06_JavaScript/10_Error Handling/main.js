// Example of error handling in JavaScript

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    } finally {
        console.log("Division operation attempted.");
    }
}

// Usage examples
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // null, with error message