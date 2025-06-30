/**
 * Temporal Dead Zone (TDZ) and Variable Scoping in JavaScript
 * Demonstrates let, const, var, block scope, function scope, and TDZ.
 */

// Example 1: var is function-scoped, not block-scoped
function varScopeExample() {
    if (true) {
        var x = 10;
    }
    console.log('var x:', x); // 10 (accessible outside the block)
}
varScopeExample();

// Example 2: let and const are block-scoped
function letConstScopeExample() {
    if (true) {
        let y = 20;
        const z = 30;
        console.log('let y inside block:', y); // 20
        console.log('const z inside block:', z); // 30
    }
    // console.log(y); // ReferenceError: y is not defined
    // console.log(z); // ReferenceError: z is not defined
}
letConstScopeExample();

// Example 3: Temporal Dead Zone (TDZ) with let
function tdzLetExample() {
    // console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 5;
    console.log('let a after declaration:', a); // 5
}
tdzLetExample();

// Example 4: Temporal Dead Zone (TDZ) with const
function tdzConstExample() {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    const b = 15;
    console.log('const b after declaration:', b); // 15
}
tdzConstExample();

// Example 5: var hoisting (no TDZ)
function varHoistingExample() {
    console.log('var c before declaration:', c); // undefined (hoisted)
    var c = 25;
    console.log('var c after declaration:', c); // 25
}
varHoistingExample();

// Example 6: Block scope with let/const vs var
{
    let blockLet = 'I am block-scoped (let)';
    const blockConst = 'I am block-scoped (const)';
    var blockVar = 'I am function-scoped (var)';
    console.log(blockLet); // OK
    console.log(blockConst); // OK
}
try {
    console.log(blockLet); // ReferenceError
} catch (e) {
    console.log('blockLet is not accessible outside block');
}
try {
    console.log(blockConst); // ReferenceError
} catch (e) {
    console.log('blockConst is not accessible outside block');
}
console.log(blockVar); // OK, accessible outside block

// Example 7: Function scope with var
function functionScopeVar() {
    var foo = 'I am function-scoped';
    if (true) {
        var foo = 'I am still function-scoped';
    }
    console.log(foo); // 'I am still function-scoped'
}
functionScopeVar();

// Example 8: Shadowing with let/const
let shadow = 'outer';
{
    let shadow = 'inner';
    console.log('Shadow inside block:', shadow); // 'inner'
}
console.log('Shadow outside block:', shadow); // 'outer'

// Example 9: Illegal shadowing with var and let
function illegalShadowing() {
    // let x = 1;
    // var x = 2; // SyntaxError: Identifier 'x' has already been declared
}