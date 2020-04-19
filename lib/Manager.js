// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

//* office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager"
        this.office = officeNumber

    }
    getOffice() {
        inquirer.prompt([
            {
                type: "number",
                name: "officeNumber",
                message: "What is your office number?",

            },
            setTimeout(function () {

                if (typeof input !== 'number') {
                    console.log("you need to give a valid numbe=r")
                }
            }),
        ])
        return this.office
    }
    getRole() {
        return this.role
    }
}
// * getRole()//Overridden to return Manager
module.exports = Manager
