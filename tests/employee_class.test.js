const Employee = require('../lib/employee_class');

describe('Employee', () => {
    describe("getName", () => {
        it("should return a string", () => {
            const newEmp = new Employee("John",1,"john@gmail",1234567890)
            expect(newEmp.name).toBe("John")
        });
        it("should return false if it is a string", () => {
            const cb = new Employee(1,"John","john@gmail",1234567890)
            const errMsg = new Error("Employee Name must be a string")
            // expect(cb.name).toThrowError(errMsg)
            expect(cb.name).toBe(1)
        });
        });
        //testing for the ID
        describe("getID", () => {
            it("should return a number", () => {
                const newId = new Employee ("John",1,"john@gmail",1234567890)
                expect(newId.id).toBe(1)
            });
            it("should not return a number", () => {
                const newId = new Employee ("John","1","john@gmail",1234567890)
                expect(newId.id).toBe("1")
            });
        });
        describe("getEmail", () => {
            it("should return a string with a email address", () => {
                // const expected = expect.stringContaining("@")
                const newEmail = new Employee ("John",1,"john@gmail",1234567890)
                expect(newEmail.email).toEqual("john@gmail")
            });
            it("should not return a string", () => {
                const newEmail = new Employee ("John",1,1,1234567890)
                expect(newEmail.email).toEqual(1)
            });
        });
    //     describe("getRole", () => {
    //         it("should return a string", () => {
    //             const newRole = () =>  new Employee ("John",1,"john@gmail","manager")
    //             expect(newRole.).toEqual(true)
    //         });
    //         it("should not return a string", () => {
    //             const str = 1
    //             expect(str).toEqual(false)
    //         })
    // });
});
