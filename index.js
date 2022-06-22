const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const { constants } = require('buffer');

const employeeQuestions = [
    { 
        name: 'name', 
    message: 'What is your name?'
 },
 {
    name: 'email', 
    message: 'What is your email address?'
 },
 {
    name: 'id',
    message: 'What is your ID number?'
 }
];


const employees = [];
const manager = new Manager("John", 1, "@gmail.com", "123");
const engineer = new Engineer("John", 1, "@gmail.com", "johndoe");
const intern = new Intern("John", 1, "@gmail.com", "UNC");
employees.push(manager);
employees.push(engineer);
employees.push(intern);

// Write code to use inquirer to:
// 1. Prompt the user to select an option
// 2. Once the user has selected an option, use switch/case to execute the option
// 3. After the user has selected an option, use inquirer to prompt the user with the corresponding questions
// 4. Once the user has provided answers for the questions, use the answers to create an HTML page using the HTML template provided
// 5. Finally, open the HTML page in a browser to view the rendered HTML

function start(){
    console.log("Welcome to the Team Generator!");
    mainmenu();
}

async function mainmenu() {
    const mainmenu = await inquirer.prompt(
        {
            type: "list",
            name: "mainmenu",
            message: "What would you like to do?",
            choices: ['add manager', 'add engineer', 'add intern', 'view team', 'exit']
        })
    switch (mainmenu.mainmenu) {
        case 'add manager':
            addManager();
            break;
        case 'add engineer':
            addEngineer();
            break;
        case 'add intern':
            addIntern();
            break;
        case 'view team':
            viewTeam();
            break;
        case 'exit':
            exit();
            break;
    }
};

//create async function that adds manager function

async function addManager () {
}

async function addEngineer () {}

async function addIntern () {}

function finish () {}