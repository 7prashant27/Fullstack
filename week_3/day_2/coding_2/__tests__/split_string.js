const func = require('../split_string')

test('test 1', () => {
    expect(func('abcdefghi','c')).toEqual(['ab','defghi'])
})

test('test 2', () => {
    expect(func('a,c,d,e,f,g',',')).toEqual(['a','c','d','e','f','g'])
})

test('test 3', () => {
    expect(func('///avc','/')).toEqual(['','','','avc'])
})

test('test 4', () => {
    expect(func('abaabbaaabbb','b')).toEqual(['a','aa','','aaa','','',''])
})

