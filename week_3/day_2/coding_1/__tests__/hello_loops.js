const func = require('../hello_loops.js')

test('test 1', () => {
    expect(func('Hello Masai')).toBe(
    'Hello Masai' +
    '\nHello Masai' +
    '\nHello Masai' +
    '\nHello Masai'+
    '\nHello Masai'+
    '\nHello Masai'+
    '\nHello Masai'+
    '\nHello Masai'+
    '\nHello Masai'+
    '\nHello Masai')
})

test('test 2', () => {
    expect(func('Test Case PASSED')).toBe(
        'Test Case PASSED' +
        '\nTest Case PASSED'+
        '\nTest Case PASSED'+
        '\nTest Case PASSED'+
        '\nTest Case PASSED'+
        '\nTest Case PASSED'+
        '\nTest Case PASSED'+
        '\nTest Case PASSED'+
        '\nTest Case PASSED'+
        '\nTest Case PASSED'
        )
})
