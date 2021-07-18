const func = require('../loops_limit')

test('test 1', () => {
    expect(func(12)).toBe(0+"\n"+1+"\n"+2+"\n"+3+"\n"+4+"\n"+5+"\n"+6+"\n"+7+"\n"+8+"\n"+9+"\n"+10+'\n'+11+'\n'+12)
})

test('test 2', () => {
    expect(func(4)).toBe(0+"\n"+1+"\n"+2+"\n"+3+"\n"+4)
})

test('test 3', () => {
    expect(func(0)).toBe('0')
})
