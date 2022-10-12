const Manager = require('../lib/manager')
describe("Manager", () => {
    describe('getOfficeNum', () => {
        it("should be a 10 digit number", () => {
            //arrange
            const newNum = new Manager("John", 1, 1, "1234567890")            //act and assert
            expect(newNum.officeNum.length).toEqual(10)
        });
        it("should return false if it is not a 10 digit number", () => {
            const newNum = new Manager("John", 1, 1, "12345")
            expect(newNum.officeNum.length).toEqual(5)
        });
        it("should return false if it is not a number", () => {
            const newNum = new Manager("John", 1, 1, "Hello")
            expect(newNum.officeNum).toEqual("Hello")
        })
    })
})
