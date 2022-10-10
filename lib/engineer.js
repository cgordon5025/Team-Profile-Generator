const Employee = require('./employee_class')


class Enigneer extends Employee {
    constructor(name, id, email, github) {
        this.github = github
        super(name, id, email)
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return Enigneer
    }
}