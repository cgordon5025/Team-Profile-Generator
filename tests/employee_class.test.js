const Employee = require('../lib/employee_class');

describe('Employee', () => {
    describe("getName", () => {
        it("should return a string", () => {
            const str = "John"
            const result = new Employee.getName(str)
            expect(result).toBe(true)
        });
        it("should not return a string", () => {
            const str = 1
            expect(str).toBe(false)
        });
    });
    //testing for the ID
    describe("getID", () => {
        it("should return a number", () => {
            const str = 1
            expect(str).toBe(true)
        });
        it("should not return a number", () => {
            const str = "John"
            expect(str).toBe(false)
        });
    });
    describe("getEmail", () => {
        it("should return a string with a email address", () => {
            // const expected = expect.stringContaining("@")
            const str = "john@gmail"
            expect(str).toEqual(true)
        });
        it("should not return a string with a email address", () => {
            const str = "john"
            expect(str).toEqual(false)
        });
    });
    describe("getRole", () => {
        it("should return a string", () => {
            const str = "john"
            expect(str).toEqual(true)
        });
        it("should not return a string", () => {
            const str = 1
            expect(str).toEqual(false)
        })
    });
});
