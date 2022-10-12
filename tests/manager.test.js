const Manager = require('../lib/manager')
describe("Manager", () => {
    describe('getOfficeNum', () => {
        it("should be a 10 digit number", () => {
            //arrange
            const num = 1234567890
            //act and assert
            expect(num.length).toEqual(10)
        });
        it("should return false if it is not a 10 digit number", () => {
            const num = 12345
            expect(num).toEqual(false)
        });
        it("should return false if it is not a number", () => {
            const num = "Hello"
            expect(num).toEqual(false)
        })
    })
})
