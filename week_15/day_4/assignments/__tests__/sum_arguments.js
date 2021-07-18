const sum = require('../sum_arguments.js')

describe("Sum function test suit",() => {
    test("test (2 + 3 = 5)",() => {
        expect(sum(2,3)).toBe(5)
    })

    test("test of sum function:sum(2-5), should be -3",()=>{
        expect(sum(2,-7)).toBe(-5)
    })
    

    test("test of sum function:sum(5) #only 1 argument passes" ,()=>{
        expect(sum(5)).toBe("function want 2 arguments")
    })
})