import inquirer from "inquirer";
import { Intern } from "./lib/Intern.js";
import { Engineer } from "./lib/Engineer.js";
import { Manager } from "./lib/Manager.js";


// Questions for all employees
async function employeeQuestion() {
  const res = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
    },
  ])
}

// Main Menu
async function mainMenu() {
  console.log("Welcome to the Employee Team Generator!");

  const response = await inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (response) {
      if (response.role === "Manager") {
        manQuestion();
      } else if (response.role === "Engineer") {
        engQuestion();
      } else if (response.role === "Intern") {
        intQuestion();
      }
    }
)}

//Manager question for office number
function manQuestion() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      }
    ])
    .then(function (response) {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      console.log(manager);
    });
}

// Intern question for school Here
// Engineer question for github account Here

mainMenu();


