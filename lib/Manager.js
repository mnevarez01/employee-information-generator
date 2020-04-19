// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

//* office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email
        this.office = officeNumber
        super(this.name, this.id, this.email);
    }
    getOffice() {
        inquirer.prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?"

            }
        ])
        return this.office
    }
    getRole() {
        if ("role" === "manager") {
            return Manager;
        }
    }
}
// * getRole()//Overridden to return Manager
module.exports = Manager
