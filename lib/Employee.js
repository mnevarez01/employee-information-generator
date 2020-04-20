// TODO: Write code to define and export the Employee class

// ?? Do we need to add conditions to methods so that we make sure we have the right variables d

class Employee {
    constructor(name, id, email, employee) {
        this.name = name;
        this.id = id;
        this.email = email
        this.employee = employee
        this.role = "Employee";
    }
    async getName() {

        return this.name
    }
    async getID() {

        return this.id

    }
    getEmail() {

        return this.email;

    }
    getRole() {

        return this.role
    }

}

module.exports = Employee;