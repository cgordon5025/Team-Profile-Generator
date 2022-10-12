const Intern = require('../lib/intern')

describe("Intern", () => {
    describe("school", () => {
        it("should return true if its a string", () => {
            const newSchool = new Intern("John", 1, 1, "Georgia Tech")
            expect(newSchool.school).toEqual("Georgia Tech")
        });
        it("should return false if its not a string", () => {
            const newSchool = new Intern("John", 1, 1, 1)
            expect(newSchool.school).toEqual(1)
        })
    })
})