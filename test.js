let assert = require('assert');
let add = require('./add')

describe('Calculator', () => {
	 describe('Adding nothing', () => {
		it('should return 0', function() {
			assert.equal(add(""), 0);
		})
	})

	describe('Return 12', () => {
		it('should return 12', function() {
			assert.equal(add("12"), 12); 
		})
	})

	describe('Return sum of 12 and 11', () => {
		it('should return 23', function() {
			assert.equal(add("12,11"), 23); 
		})
	})
	
	describe('Sum of 4 numbers', () => {
		it('should return 34', function() {
			assert.equal(add("12,11,5,6"), 34); 
		})
	})
	
	describe('Sum of 4 numbers with a comma and a \\n', () => {
		it('should return 34', function() {
			assert.equal(add("12,11\n5,6"), 34); 
		})
	})
	
	
});
