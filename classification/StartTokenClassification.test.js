const Classification = require('./StartTokenClassification')

module.exports.tests = {}

module.exports.tests.constructor = (test) => {
  test('constructor', (t) => {
    const c = new Classification()
    t.false(c.public)
    t.equals(c.label, 'start_token')
    t.equals(c.confidence, 1.0)
    t.deepEqual(c.meta, {})
    t.end()
  })
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`StartTokenClassification: ${name}`, testFunction)
  }

  for (const testCase in module.exports.tests) {
    module.exports.tests[testCase](test, common)
  }
}
