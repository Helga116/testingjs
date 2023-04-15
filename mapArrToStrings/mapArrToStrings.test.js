const {mapArrToStrings} = require('./mapArrToStrings')
const {test, expect, describe} = require("@jest/globals")

describe('mapArrToStrings', () => {
    test('array of numbers to array of strings', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('hash', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'asasas'])).toEqual(['1', '2', '3'])
    })
    test('empty array', () => {
        expect(mapArrToStrings([])).toEqual([])
    })
    test('not to be', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4'])
    })
})