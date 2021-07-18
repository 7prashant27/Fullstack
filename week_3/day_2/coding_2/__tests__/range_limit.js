const func = require('../range_limit.js')

test('test 1', () => {
    expect(func('9 12')).toBe('9\n10\n11')
})

test('test 2', () => {
    expect(func('2 6')).toBe('2\n3\n4\n5')
})