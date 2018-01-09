let assert = require('assert');
let add = require('./add')

describe('Calculator', () => {
  describe('Adding nothing', () => {
    it('should return 0', function() {
      assert.equal(add(""), 0);
    })
  })

  // Test template:
  describe('Calculator return 12', () => {
	it('should return 12', function() {
		assert.equal(add("12"), 12); 
	})
	 })

  describe('Calculator return sum of 12 and 11', () => {
	it('should return 23', function() {
		assert.equal(add("12", "11"), 23); 
	})
	 })
});

