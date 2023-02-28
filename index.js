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

async function startProgram() {
   let { name,id,email,officeNumber } = await inquirer
       .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's employee ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?"
            }
        ])
    team.push(new Manager(name,id,email,officeNumber))
    userChoice()
}
startProgram()

// after entering manager's details user can choose to add other profiles or finish
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
   // add engineer details
   if(responses.choice === "Engineer") {
    console.log('engineer');
    engineer()
   }
   
   // add intern details
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


// asking for engineer's details
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
     message: "Please enter the engineer's email address:"
    },
     {
     type: 'input',
     name:'gitHub',
     message: "Please enter the engineer's GitHub username:"
    },
  ]).then((data) => {
    let newEngineer = new Engineer(data.name,data.id,data.email,data.gitHub)
    team.push(newEngineer)
    userChoice()
})
}

// asking for intern's detail
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
     message: "Please enter the intern's email address:"
    },
     {
     type: 'input',
     name:'schoolName',
     message: "Please enter the intern's school name:"
    },
  ]).then((data) => {
    let newIntern = new Intern(data.name,data.id,data.email,data.schoolName)
    team.push(newIntern)
    userChoice()
})
}
