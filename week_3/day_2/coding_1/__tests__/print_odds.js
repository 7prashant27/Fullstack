const func = require('../print_odds.js')

test('test 1', () => {
    expect(func(4)).toBe( 1 + '\n' + 3) 
})

test('test 2', () => {
    expect(func(12)).toBe( 1 + '\n' + 3 + '\n' + 5 + '\n' + 7 + '\n' + 9+ '\n' + 11) 
})

test('test 3', () => {
    expect(func(0)).toBe("NO") 
})

test('test 4', () => {
    expect(func(1)).toBe('1') 
})


