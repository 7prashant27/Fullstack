const func = require('../sum_evens_array.js')

test('test 1', () => {
    expect(func('5 4 2 1 3 2 0')).toBe(8)
})

test('test 2', () => {
    expect(func('5 4 2 1 3 2 0 -2 -6')).toBe(0)
})

test('test 3', () => {
    expect(func('0 100 500 -300 -8000 5000')).toBe(-2700)
})


