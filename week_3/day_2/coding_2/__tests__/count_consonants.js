const func = require('../count_consonants.js')

test('test 1', () => {
    expect(func('abcdefa')).toBe(4)
})

test('test 2', () => {
    expect(func('AAAaaaBBBZZZzzzEi')).toBe(9)
})

test('test 3', () => {
    expect(func('aeiouAEIOUbbbvvvvnn123123')).toBe(9)
})


