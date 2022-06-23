const generateTeam = require('./src/team.js');
const inquirer = require("inquirer");
const fs = require("fs");
// const team = require("./src/team.js");
const Manager = require("./lib/Manager.js");
const Intern  = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

const employeeArray = [];

// Prompt user for employee information
const questions = async () => {
  const response = await inquirer.prompt([
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
    {
      type: "list",
      name: "role",
      message: "What is the employee's role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);

  // console.log(response)

  // If user selects Manager, prompt for office number
  if (response.role === "Manager") {
    const managerRes = await inquirer.prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is the employee's office number?",
      },
    ]);
    const newMan = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );

    //push new manager to employeeArray
    employeeArray.push(newMan);

    console.log(employeeArray);
  }

  // If user selects Engineer, prompt for github username
  if (response.role === "Engineer") {
    const engineerRes = await inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is the employee's github username?",
      },
    ]);
    const newEng = new Engineer(
      response.name,
      response.id,
      response.email,
      response.github
    );

    //push new engineer to employeeArray
    employeeArray.push(newEng);
  }
  // If user selects Intern, prompt for school name
  else if (response.role === "Intern") {
    const internRes = await inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What is the employee's school name?",
      },
    ]);
    const newIntern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    //push new intern to employeeArray
    employeeArray.push(newIntern);
  }
};

async function init() {
  await questions();
  // console.log(employeeArray);

  //prompt user to add another employee or write team html
  const addMore = await inquirer.prompt([
    {
      type: "list",
      name: "addMore",
      message: "Would you like to add another employee?",
      choices: ["Yes", "No"],
    },
  ]);
  // console.log(addMore);
  if (addMore.addMore === "Yes") {
    await questions();
  } else {
    //write team html using fs module

    fs.writeFile("./dist/team.html", generateTeam(employeeArray, 'utf-8'), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  }
}

// Call init function
init();
