const func = require('../taxCalculator.js')

test('test: 1', () => {
    expect(func(250000,0)).toBe(0)
})

test('test: 2', () => {
    expect(func(250000,100000)).toBe(0)
})

test('test: 3', () => {
    expect(func(300000,100000)).toBe(0)
})

test('test: 4', () => {
    expect(func(300000,0)).toBe(5000)
})

test('test: 5', () => {
    expect(func(500000,0)).toBe(25000)
})

test('test: 6', () => {
    expect(func(500000,50000)).toBe(22500)
})

test('test: 7', () => {
    expect(func(900000,0)).toBe(105000)
})

test('test: 8', () => {
    expect(func(1100000,100000)).toBe(152000)
})

test('test: 9', () => {
    expect(func(2500000,0)).toBe(575000)
})

test('test: 9', () => {
    expect(func(2500000,0)).toBe(575000)
})

test('test: 9', () => {
    expect(func(2500000,2000000)).toBe(560000)
})
