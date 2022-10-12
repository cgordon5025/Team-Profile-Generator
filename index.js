//html and css generator
const makeHTML = require('./src/generateHTML')
//profile classes
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

//loading in necessary packages
const inquirer = require('inquirer')
const fs = require('fs');

//empty array for profiles
var managerArray = []
var engineerArray = []
var internArray = []
var myArray = []
var tempArray = []

const empChoices = [
    {
        type: 'list',
        message: "Which type of emplyee would you like to enter information about?",
        choices: ["Engineer", "Intern", "No more employees to enter"],
        name: 'empOption'
    }
]
const managerQuest = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name',
        // validate: function (name) {
        //     if (typeof name === 'string') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid name")
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        messgae: "What is the manager's employee ID?",
        name: 'id',
        // validate: function (id) {
        //     if (typeof id === 'number') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid number")
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'email',
        // validate: function (email) {

        //     valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

        //     if (valid) {
        //         console.log("Great job");
        //         return true;
        //     } else {
        //         console.log(".  Please enter a valid email")
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: "officeNum",
        // validate: function (officeNum) {
        //     if (typeof officeNum === 'number') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid number, no hyphens")
        //         return false
        //     }
        // }
    }
]
const engineerQuest = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
        // validate: function (name) {
        //     if (typeof name === 'string') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid name")
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        messgae: "What is the engineer's employee ID?",
        name: 'id',
        // validate: function (id) {
        //     if (typeof id === 'number') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid number")
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email',
        // validate: function (email) {

        //     valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

        //     if (valid) {
        //         console.log("Great job");
        //         return true;
        //     } else {
        //         console.log(".  Please enter a valid email")
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        message: "What is the engineer's github?",
        name: "github",
        // validate: function (github) {
        //     if (typeof github === 'string') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid github")
        //         return false
        //     }
        // }
    }
]
const internQuest = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
        // validate: function (name) {
        //     if (typeof name === 'string') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid name")
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        messgae: "What is the intern's employee ID?",
        name: 'id',
        // validate: function (id) {
        //     if (typeof id === 'number') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid number")
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email',
        // validate: function (email) {

        //     valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

        //     if (valid) {
        //         console.log("Great job");
        //         return true;
        //     } else {
        //         console.log(".  Please enter a valid email")
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: "school",
        // validate: function (school) {
        //     if (typeof school === 'string') {
        //         return true
        //     }
        //     else {
        //         console.log("please enter a valid school")
        //         return false
        //     }
        // }
    }
]
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!'))
}
async function init() {
    await inquirer.prompt(managerQuest)
        .then(managerInput => {
            const { name, id, email, officeNum } = managerInput
            const manager = new Manager(name, id, email, officeNum)
            myArray.push(manager)
            // console.log(manager)
        })
    await otherOpt()
}
async function otherOpt() {

    var myEmp = await inquirer.prompt(empChoices)
    console.log(myEmp.empOption)
    if (myEmp.empOption == 'Engineer') {
        await inquirer.prompt(engineerQuest)
            .then(engineerInput => {
                const { name, id, email, github } = engineerInput
                const engineer = new Engineer(name, id, email, github)
                myArray.push(engineer)
                // console.log(engineerArray)
                otherOpt()
            })

    } else if (myEmp.empOption == 'Intern') {
        await inquirer.prompt(internQuest)
            .then(internInput => {
                const { name, id, email, school } = internInput
                const intern = new Intern(name, id, email, school)
                myArray.push(intern)
                // console.log(internArray)
                otherOpt()
            })

    } else if (myEmp.empOption == "No more employees to enter") {
        // go on to make the sheets and test?
        writeToFile("./dist/sampleStyle.css", `.main {
                margin: 10px;
                box-shadow: 10px 5px 5px black;
            }`), (err) =>
                err ? console.error(err) : console.log('CSS Created!')
        await writeToFile("./dist/sample.html", makeHTML(myArray)), (err) =>
            err ? console.error(err) : console.log('HTML Created!')
        // makeHTML(myArray)
        return
    }

}

init()

//i've got the object manager/engineer/intern with their name/id/email etc in it
//now how can i iterate for that
