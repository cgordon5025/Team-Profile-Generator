const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    describe("github", () => {
        it("should be a string", () => {
            const str = "mygithub"
            expect(str).toEqual(true)
        });
        //include one for an invalid github page?
        it("should return false if it is not a string", () => {
            const str = 1
            expect(str).toEqual(false)
        })
    })
})