const func = require('../reverse_string.js')

test('test 1', () => {
    expect(func('aabb1ccdef')).toBe('fedcc1bbaa')
})

test('test 2', ()=> {
    expect(func('aabccd')).toBe('dccbaa')
})
