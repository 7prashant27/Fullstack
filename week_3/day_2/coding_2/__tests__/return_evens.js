const func = require('../return_evens.js')

test('test 1', () => {
    expect(func(10)).toBe(
        0 + 
        '\n'+ 2 +
        '\n'+ 4 +
        '\n'+ 6 +
        '\n'+ 8 +
        '\n'+ 10 
        )
})

test('test 2', () => {
    expect(func(0)).toBe(0)
})

test('test 3', () => {
    expect(func(1)).toBe(0)
})
