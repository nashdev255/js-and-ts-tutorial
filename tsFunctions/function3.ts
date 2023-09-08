/* immediate function */

/* execute */
const value2 = (function(x, y) {
    return x || y;
}(true, false));

console.log(value2);

// value is already declared at function2.ts
