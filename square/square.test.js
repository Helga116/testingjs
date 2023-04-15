const {square} = require('./square')
const {test, expect, describe, afterEach} = require("@jest/globals")

describe('square', () => {
    // test('toBe', () => {
    //     expect(square(2)).toBe(4)
    // })
    // test('toBeLessThan', () => {
    //     expect(square(2)).toBeLessThan(5)
    // })
    // test('toBeGreaterThan', () => {
    //     expect(square(2)).toBeGreaterThan(3)
    // })
    // test('not toBeUndefined', () => {
    //     expect(square(2)).not.toBeUndefined()
    // })
    test('mock method', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test('mock method with 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
})