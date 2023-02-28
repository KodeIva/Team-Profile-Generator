const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

let team = []

function manager() {
 inquirer.prompt([
    {
     type: 'input',
     name: 'name',
     message: "What is your manager's name?",
    },
    {
     type: 'input',
     name:'id',
     message: "Please enter the manager's employe ID:"
    },
    {
     type: 'input',
     name:'email',
     message: "Please enter the manager's email:"
    },
     {
     type: 'input',
     name:'officeNumber',
     message: "Please enter the manager's office number:"
    },
]).then((data) => {
  let newManager = new Manager(data.name,data.id,data.email,data.officeNumber)
  console.log(newManager);
  team.push(newManager)
  userChoice()
  console.log(team);
 })
}


function engineer() {
  inquirer.prompt([
    {
     type: 'input',
     name: 'name',
     message: "What is engineer's name?",
    },
    {
     type: 'input',
     name:'id',
     message: "Please enter the engineer's employe ID:"
    },
    {
     type: 'input',
     name:'email',
     message: "Please enter the engineer's email:"
    },
     {
     type: 'input',
     name:'gitHub',
     message: "Please enter the engineer's GitHub:"
    },
  ]).then((data) => {
    let newEngineer = new Engineer(data.name,data.id,data.email,data.gitHub)
    team.push(newEngineer)
    userChoice()
})
}

function intern() {
  inquirer.prompt([
    {
     type: 'input',
     name: 'name',
     message: "What is the intern's name?",
    },
    {
     type: 'input',
     name:'id',
     message: "What is the intern's ID number?"
    },
    {
     type: 'input',
     name:'email',
     message: "Please enter the intern's email:"
    },
     {
     type: 'input',
     name:'schoolName',
     message: "Please enter the intern's school name:"
    },
  ]).then((data) => {
    team.push(new Intern(data.name,data.id,data.email,data.schoolName))
    userChoice()
})
}

function userChoice() {
  inquirer.prompt ([
   {
        type: "list",
        message: "Add Team Member?",
        name: "choice",
        choices: ["Engineer", "Intern", "Finish Building Team"]
    }
 ]).then((responses) => {
   console.log(responses);
   // enter engineer details
   if(responses.choice === "Engineer") {
    console.log('engineer');
    engineer()
   }
   
   // ennter inter details
   if(responses.choice === "Intern") {
    console.log('intern');
    intern()
   }

   // finish and generating HTML 
   if(responses.choice === "Finish Building Team") {
      let htmlDoc = render(team)
      fs.writeFile(outputPath,htmlDoc)
   }
 })
}


async function startProgram() {
   let { name, id, email, officeNumber } = await inquirer
       .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the office number?"
            }
        ])
    team.push(new Manager(name, id, email, officeNumber))
    userChoice()
}
startProgram()