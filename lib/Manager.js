// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

//* office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager"
        this.office = parseInt(officeNumber)

    }
    getOffice() {
        inquirer.prompt([
            {
                type: "number",
                name: "officeNumber",
                message: "What is your office number?",
                value: 0
            },

        ])
        return this.office
    }
    getRole() {
        return this.role
    }
}
// * getRole()//Overridden to return Manager
module.exports = Manager
