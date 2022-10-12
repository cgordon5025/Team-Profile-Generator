const Intern = require('../lib/intern')

describe("Intern", () => {
    describe("school", () => {
        it("should return true if its a string", () => {
            const str = "Georgia Tech"
            expect(str).toEqual(true)
        });
        it("should return false if its not a string", () => {
            const str = 1
            expect(str).toEqual(false)
        })
    })
})