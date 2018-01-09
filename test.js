let assert = require('assert');
let add = require('./add')

describe('Calculator', () => {
  describe('Adding nothing', () => {
    it('should return 0', function() {
      assert.equal(add(""), 0);
    })
  })

  // // Test template:
  // describe(<Put a short description of the test here>, () => {
  //   it(<describe the expected behavior>, function() {
  //     Put your assertions here
  //   })
  // })
});
