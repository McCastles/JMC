const assert = require('chai').assert;
const describeJMC = require('../src/describe');

describe('Format', function() {
  it('typeHandleReferences should return [address[]](file.md#address)', function() {
    const result = describeJMC.typeHandleReferences('file.json#address', [], '[]');
    assert.equal(result, '[address[]](file.md#address)');
  });
});
