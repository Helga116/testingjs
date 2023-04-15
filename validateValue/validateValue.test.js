const {validateSomeValue} = require('./validateValue')
const {test, expect, describe} = require("@jest/globals")


describe('validateSomeValue', () => {
    test('Validation value', () => {
        expect(validateSomeValue(50)).toBe(true)
    })
    test('Value = 100', () => {
        expect(validateSomeValue(100)).toBe(true)
    })
    test('Value = 0', () => {
        expect(validateSomeValue(0)).toBe(true)
    })
    test('Value > 100', () => {
        expect(validateSomeValue(101)).toBe(false)
    })
    test('Value < 0', () => {
        expect(validateSomeValue(-1)).toBe(false)
    })
})