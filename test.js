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
});
