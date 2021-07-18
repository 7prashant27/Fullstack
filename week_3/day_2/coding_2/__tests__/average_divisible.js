const func = require('../average_divisible.js')

test('test 1', () => {
    expect(func(10,3)).toBe(6)
})

test('test 2', () => {
    expect(func(5,1)).toBe(3)
})
