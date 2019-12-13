const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [{}];

inquirer
    .prompt([
        {
            type: "confirm",
            message: "Would you like to add a team member?",
            name: "addTeamMember",
            default: "Y"
        },
    ])
    .then(function ({ addTeamMember }) {
        if (addTeamMember === "Y") {
            inquirer.prompt([
                {
                    type: "list",
                    message: "What Role would you like to add to your team?",
                    choices: ["Manager", "Engineer", "Intern"],
                    name: "role"
                }
            ])
        } else if (team.length < 2) {
            inquirer.prompt([{
                type: "list",
                message: "You must have at least 2 team members - one being a Manager.  What Role would you like to add to your team?",
                choices: ["Manager", "Engineer", "Intern"],
                name: "role2"
            }])
        } else console.log("Thank you for adding your team members!");

        switch (role) {
            case "Manager":
                return createManager(Manager);

            case "Engineer":
                return createEngineer(Engineer);

            case "Intern":
                return createIntern(Intern);
        }

    })
    .catch(function (err) {
        console.log(err);
    });

function createManager(Employee) {
    console.log("let's create a Manager!")
inquirer.prompt([
    {
        type: "input",
        message: "What is the Manager's Name?",
        name: "name"
    }
])

}
function createEngineer() {
    console.log("let's create a Engineer!")
}
function createIntern() {
    console.log("let's create an Intern!")
}