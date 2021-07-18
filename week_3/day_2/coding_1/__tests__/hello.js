const func = require('../hello')

test('test 1', () => {
    expect(func('Hello Masai')).toBe('Hello Masai')
})
test('test 2', () => {
    expect(func('Test Case PASSED')).toBe('Test Case PASSED')
})

