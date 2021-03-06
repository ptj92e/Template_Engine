//These variables are set to different js pages and npm modules
let inquirer = require('inquirer');
let fs = require("fs");
let Manager = require("./lib/Manager");
let Engineer = require("./lib/Engineer");
let Intern = require("./lib/Intern");
//This array is where each new employee is pushed after the inquirer prompts
let employeeArray = [];
//This function creates a new employee with the class "Manager"
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
        //This function takes in the response information from the inquirer prompts and passes it into a new variable called manager
        let manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        // This line pushes the new manager variable into the employeeArray
        employeeArray.push(manager);
        //This line calls the new employee function
        newEmployee();
    });
};
//This function directs what happens after a new employee is created
function newEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to create another employee?",
            choices: ["Engineer", "Intern", "I do not want to create another employee"],
            name: "newEmployee",
        },
    ]).then(function (response) {
        //This function determines which function operates next depending on the input from the user
        if (response.newEmployee === "Engineer") {
            newEngineer();
        } else if (response.newEmployee === "Intern") {
            newIntern();
        } else {
            writeHTML();
        }
    });
};
//This function creates a new employee with the class "Engineer"
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
    ]).then(function (res) {
        //This function takes in the response information from the inquirer prompts and passes it into a new variable called engineer
        let engineer = new Engineer(res.name, res.id, res.email, res.github);
        // This line pushes the new engineer variable into the employeeArray
        employeeArray.push(engineer);
        //This line calls the new employee function
        newEmployee();
    });
};
//This function creates a new employee with the class "Intern"
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
    ]).then(function (res) {
        //This function takes in the response information from the inquirer prompts and passes it into a new variable called intern
        let intern = new Intern(res.name, res.id, res.email, res.school);
        // This line pushes the new intern variable into the employeeArray
        employeeArray.push(intern);
        //This line calls the new employee function
        newEmployee();
    });
};
//This vaiable accepts the HTML output from the employeeHTML function
let rowHTML = [];

function employeeHTML() {
    //This function loops over the employeeArray and creates HTML based off of each employee
    employeeArray.forEach(function(employee) {
    
        if (employee.title === "Manager") {
            let managerText = managerHTML(employee.name, employee.title, employee.id, employee.email, employee.officeNumber);
            rowHTML.push(managerText);
        } else if (employee.title === "Engineer") {
            let engineerText = engineerHTML(employee.name, employee.title, employee.id, employee.email, employee.github);
            rowHTML.push(engineerText);
        } else if (employee.title === "Intern") {
            let internText = internHTML(employee.name, employee.title, employee.id, employee.email, employee.school);
            rowHTML.push(internText);
        }
        //If the employee is a manager, a new manager card is created and pushed to the rowHTML array
        function managerHTML() {
            return `<div class="card m-3 shadow-lg">
                <div class="card-header bg-primary text-white">
                    <h3>${employee.name}</h3>
                    <h3>${employee.title}</h3>
                </div>
                <div class="container bg-light p-3">
                    <ul class="list-group list-group-flush border-light">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">E-mail: <a href="#">${employee.email}</a></li>
                        <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                    </ul>
                </div>
            </div>`
        }
        //If the employee is a engineer, a new engineer card is created and pushed to the rowHTML array
        function engineerHTML() {
            return `<div class="card m-3 shadow-lg">
                <div class="card-header bg-primary text-white">
                    <h3>${employee.name}</h3>
                    <h3>${employee.title}</h3>
                </div>
                <div class="container bg-light p-3">
                    <ul class="list-group list-group-flush border-light">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">E-mail: <a href="#">${employee.email}</a></li>
                        <li class="list-group-item">GitHub: ${employee.github}</li>
                    </ul>
                </div>
            </div>`
        }
        //If the employee is a intern, a new intern card is created and pushed to the rowHTML array
        function internHTML() {
            return `<div class="card m-3 shadow-lg">
                <div class="card-header bg-primary text-white">
                    <h3>${employee.name}</h3>
                    <h3>${employee.title}</h3>
                </div>
                <div class="container bg-light p-3">
                    <ul class="list-group list-group-flush border-light">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">E-mail: <a href="#">${employee.email}</a></li>
                        <li class="list-group-item">GitHub School: ${employee.school}</li>
                    </ul>
                </div>
            </div>`
        }
        
    });
};

function generateHTML() {
    //This calls the employeeHTML funciton and creates the employee cards from the employeeArray
    employeeHTML();

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    
    <body>
        <div class="header">
            <h1 class="bg-danger text-white text-center p-5">My Team</h1>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                ${rowHTML}
            </div>
        </div>
    </body>
    
    </html>`
};
//This function writes the HTML file
function writeHTML() {
    fs.writeFile("./output/team.html", generateHTML(), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
};
//This calls the newManager function which starts the whole application
newManager();