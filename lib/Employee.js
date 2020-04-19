// TODO: Write code to define and export the Employee class

// ?? Do we need to add conditions to methods so that we make sure we have the right variables d

const inquirer = require("inquirer");


class Employee {
    constructor(name, id, email, employee) {
        this.name = name;
        this.id = id;
        this.email = email
        this.employee = employee
        this.role = "";
    }
    getName() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"

            }
        ])
        return this.name
    }
    getID() {
        // ?? I have to change this to an integer?
        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "What is your ID number?"

            }
        ])
        return parseInt(id);


    }
    getEmail() {
        inquirer.prompt([
            {
                type: "input",
                name: "email",
                message: "What is your email?"

            }
        ])
        return this.email;

    }
    getRole() {
        inquirer.prompt([
            {
                type: "checkbox",
                message: "What is your role?",
                name: "role",
                choices: ["Employee", "Manager", "Engineer", "Intern"]

            }
        ])

        return this.role


    }

}

module.exports = Employee;