/**
*
*	VALIDATE: object
*
*
*	DESCRIPTION:
*		- Validates if a value is a plain JavaScript object.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: isObject( value )
	*	Validates if a value is a plain object; e.g., {}.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a plain object
	*/
	function isObject( value ) {
		if ( typeof value !== 'object' || value === null || Array.isArray( value ) === true ) {
			return false;
		}
		return true;
	} // end FUNCTION isObject()


	// EXPORTS //

	module.exports = isObject;

})();