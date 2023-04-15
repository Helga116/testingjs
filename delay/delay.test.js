const {test, expect, describe} = require("@jest/globals")
const delay = require('./delay')

describe('async functions tests', () => {
    test('', async () => {
        const sum = await delay(() => 5 + 5, 1000)
        expect(sum).toBe(10)
    })
})