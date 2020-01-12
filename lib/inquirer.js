let inquirer = require('inquirer');
let Manager = require("./Manager");
let Engineer = require("./Engineer");
let Intern = require("./Intern");

function newManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your E-Mail address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber",
        },
    ]).then(function (res) {

        console.log(res);

        newEmployee();
    });
};

function newEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to create another employee?",
            choices: ["Engineer", "Intern", "I do not want to create another employee"],
            name: "newEmployee",
        },
    ]).then(function (response) {

        if (response.newEmployee === "Engineer") {
            newEngineer();
        } else if (response.newEmployee === "Intern") {
            newIntern();
        } else {
            writeHTML();
        }
    });
};

function newEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your E-Mail address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "github",
        },
    ]).then(function(res) {
        newEmployee();
    });
};

function newIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your E-Mail address?",
            name: "email",
        },
        {
            type: "input",
            message: "Where do you go to school?",
            name: "school",
        },
    ]).then(function(res) {
        newEmployee();
    });
};

module.exports = newManager;