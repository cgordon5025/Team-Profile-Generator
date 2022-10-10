const Employee = require('./employee_class')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        this.officeNum = officeNum
        super(name, id, email)
    }
    getOfficeNum() {
        return this.officeNum
    }
    getRole() {
        return Manager
    }
}