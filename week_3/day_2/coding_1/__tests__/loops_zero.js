const func = require('../loops_zero.js')

test('test 1', () => {
    expect(func(4)).toBe(4+'\n'+3+'\n'+2+'\n'+1+'\n'+0)
})

test('test 2', () => {
    expect(func(12)).toBe(12+'\n'+11 +'\n'+10 +'\n'+9 +'\n'+8+'\n'+7+'\n'+6+'\n'+ 5 +'\n'+4+'\n'+3+'\n'+2+'\n'+1+'\n'+0)
})

test('test 3', () => {
    expect(func(0)).toBe('0')
})


