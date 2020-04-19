// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

// * github //GitHub username 
class Engineer extends Employee {
    constructor(name, id, email, GitHubUser) {
        super(name, id, email)
        this.github = GitHubUser
    }
    getGitHub() {
        inquirer.prompt([
            {
                type: "input",
                name: "github",
                message: "What is your GitHub user name?"

            }
        ])
        return this.github

    }
    getRole(Engineer) {
        if (this.role === "Engineer") {
            return Engineer
        }

    }


}
module.exports = Engineer;

// * getGitHub()
//* getRole()// OverRidden to return Engineer 