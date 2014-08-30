
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isObject = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-object', function tests() {
	'use strict';

	// TESTS //

	it( 'should export a function', function test() {
		expect( isObject ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isObject( {} ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				[],
				true,
				'5',
				null,
				function(){},
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isObject( values[i] ) );
		}
	});

});