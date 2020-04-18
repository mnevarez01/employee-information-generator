// TODO: Write code to define and export the Employee class

// ?? Do we need to add conditions to methods so that we make sure we have the right variables d

const inquirer = require("inquirer");


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    getName() {
        await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"

            }
        ])
        // ?? if ("name" !== "name") {
        //     console.log("please provide a valid name")
        // }

    }
    getID() {
        await inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "What is your ID number?"

            }
        ])
        // ?? if ("id" === "") {
        //     console.log("please provide a valid number")
        // }


    }
    getEmail() {
        await inquirer.prompt([
            {
                type: "input",
                name: "email",
                message: "What is your email?"

            }
        ])


    }
    getRole() {
        await inquirer.prompt([
            {
                type: "checkbox",
                message: "What is your role?",
                name: "role",
                choices: ["Employee", "Manager", "Engineer", "Intern"]

            }
        ])



    }
}



module.exports = Employee;