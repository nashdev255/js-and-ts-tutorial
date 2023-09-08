/* immediate function */

/* execute */
var value = (function(x, y) {
    return x || y;
}(true, false));

console.log(value);
