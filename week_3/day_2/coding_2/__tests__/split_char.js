const func = require('../split_char.js')

test('test 1', () => {
    expect(func('abcdefghi')).toEqual(['a','b','c','d','e','f','g','h','i'])
})

test('test 2', () => {
    expect(func('acdefg')).toEqual(['a','c','d','e','f','g'])
})

test('test 3', () => {
    expect(func('avc')).toEqual(['a','v','c'])
})

test('test 4', () => {
    expect(func('aaaaaa')).toEqual(['a','a','a','a','a','a'])
})


