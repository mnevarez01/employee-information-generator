// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

// * school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
        this.role = "Intern"
    }

    getSchool() {
        inquirer.prompt([
            {
                type: "input",
                name: "school",
                message: "What is the name of your school?"
            }
        ])
        return this.school
    }
    getRole() {

        return this.role

    }
}

module.exports = Intern;


//* getSchool()
// * getRole()//Overridden to return Intern