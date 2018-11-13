const assert = require('chai').assert;
const format = require('../src/format');

describe('Format', function() {
  describe('capitalize()', function() {
    it('capitalize should return string', function() {
      const result = format.capitalize('sample');
      assert.typeOf(result, 'string');
    });
    it('capitalize(\'sample\') should return \'Sample\'', function() {
      const result = format.capitalize('sample');
      assert.equal(result, 'Sample');
    });
  });

  describe('getRefName()', function() {
    it('getRefName should return string', function() {
      const result = format.getRefName('./sample.json#adress');
      assert.typeOf(result, 'string');
    });
    it('getRefName(\'./sample.json#address\') should return address',
        function() {
          const result = format.getRefName('./sample.json#address');
          assert.equal(result, 'address');
        }
    );
    it('getRefName(\'address\') should return \'address\'', function() {
      const result = format.getRefName('address');
      assert.equal(result, 'address');
    });
  });

  describe('slash()', function() {
    it('slash(\'sample\') should return ./sample/', function() {
      const result = format.slash('sample');
      assert.equal(result, './sample/');
    });
  });
});
