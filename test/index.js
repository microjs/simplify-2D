var expect = require('expect.js');
var server = require('..');
var client = require('../build/build');
var data = require('./test-data');

function test(simplify, name) {
  describe(name + ' side', function () {
    it('works with low quality', function () {
      var expected = [{x:224.55, y:250.15},
                      {x:268.97, y:212.12},
                      {x:293.56, y:158.5}];

      var actual = simplify(data, 5);
      expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
    });

    it('works with high quality', function () {
      var expected = [{x:224.55, y:250.15},
                      {x:267.76, y:213.81},
                      {x:293.56, y:158.5}];

      var actual = simplify(data, 5, true);
      expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
    });
  });
}
test(server, 'server');
test(client, 'client');