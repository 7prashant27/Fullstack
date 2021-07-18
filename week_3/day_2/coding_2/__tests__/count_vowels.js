const func = require('../count_vowels')

test('test 1', () => {
    expect(func('abcdefa')).toBe(3)
})

test('test 2', () => {
    expect(func('AAAaaaBBBZZZzzzEi')).toBe(8)
})

test('test 3', () => {
    expect(func('aeiouAEIOU132312412214128037513759')).toBe(10)
})

