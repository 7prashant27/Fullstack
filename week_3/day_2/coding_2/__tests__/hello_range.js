const func = require('../hello_range')

test('test 1', () => {
    expect(func('Hello Masai',4 )).toBe(
        'Hello Masai' + 
        '\nHello Masai' +
        '\nHello Masai' +
        '\nHello Masai')
})

test('test 2', () => {
    expect(func('Print this',0 )).toBe('')
})

test('test 3', () => {
    expect(func('Output',11)).toBe(
        'Output' +
        '\nOutput'+
        '\nOutput'+
        '\nOutput'+
        '\nOutput'+
        '\nOutput'+
        '\nOutput'+
        '\nOutput'+
        '\nOutput'+
        '\nOutput'+
        '\nOutput'
        )
        
    })