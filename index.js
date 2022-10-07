const inquirer = require('inquirer')
const fs = require('fs');
const empChoices = [
    {
        type: 'list',
        message: "Which type of emplyee would you like to enter information about?",
        choices: ["Engineer", "Intern", "No more employees to enter"]
    }
]
const managerQuest = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'manager_name'
    },
    {
        type: 'input',
        messgae: "What is the manager's employee ID?",
        name: 'manager_ID'
    },
    {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'manager_email'
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: "manager_office"
    }
]
const engineerQuest = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineer_name'
    },
    {
        type: 'input',
        messgae: "What is the engineer's employee ID?",
        name: 'engineer_ID'
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineer_email'
    },
    {
        type: 'input',
        message: "What is the engineer's github?",
        name: "engineer_github"
    }
]
const internQuest = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'intern_name'
    },
    {
        type: 'input',
        messgae: "What is the intern's employee ID?",
        name: 'intern_ID'
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'intern_email'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: "intern_github"
    }
]
inquirer
    .prompt(managerQuest)
    .then(prompt(empChoices))
    //need an if statement based upon the options