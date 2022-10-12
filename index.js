//html and css generator
const makeHTML = require('./src/generateHTML')
const makeCSS = require('./src/generateCSS')
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
        name: 'name'
    },
    {
        type: 'input',
        messgae: "What is the manager's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: "officeNum"
    }
]
const engineerQuest = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        messgae: "What is the engineer's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the engineer's github?",
        name: "github"
    }
]
const internQuest = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        messgae: "What is the intern's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: "school"
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
