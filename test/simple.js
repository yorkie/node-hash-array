
var test = require('tape');
var hashArray = require('../');

test('simple', function(t) {
  var sample = [
    {
      'type': 'mail',
      'value': 'abc'
    },
    {
      'type': 'SNS',
      'value': 'funk'
    }
  ];

  var hashedArr = hashArray(sample, 'type');
  var pmail = hashedArr.get('mail');
  t.equal(pmail.type, 'mail');
  t.equal(pmail.value, 'abc');

  var psns = hashedArr.get('SNS');
  t.equal(psns.type, 'SNS');
  t.equal(psns.value, 'funk');

  t.end();
});
