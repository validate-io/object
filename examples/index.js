
var isObject = require( './../lib' );

// Positive validation:
console.log( isObject( {} ) );

/**
* Returns:
*	true
*/

// Negative validation:
console.log( isObject( [] ) );

/**
* Returns:
*	false
*/

