const func = require('../join_array.js')

test('test 1', () => {
    expect(func('a b c d e f g','/')).toBe('a/b/c/d/e/f/g')
})

test('test 2', () => {
    expect(func('d e f','-')).toBe('d-e-f')
})

test('test 3', () => {
    expect(func('a v c e f','a')).toBe('aavacaeaf')
})

test('test 4', () => {
    expect(func('def gh kk','/')).toBe('def/gh/kk')
})



