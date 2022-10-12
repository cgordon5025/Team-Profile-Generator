const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    describe("github", () => {
        it("should be a string", () => {
            const newGitHub = new Engineer("John", 1, "john@gmail.com", "johngithub")
            expect(newGitHub.github).toEqual("johngithub")
        });
        //include one for an invalid github page?
        it("should return false if it is not a string", () => {
            const newGitHub = new Engineer("John", 1, "john@gmail.com", 1)
            expect(newGitHub.github).toEqual(1)
        })
    })
})