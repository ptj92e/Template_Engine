class Employee {
    //This constructor creates a new instance of the employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (this.title === undefined) {
            this.title = "Employee";
        };
    }
    //The following methods are used to return the value from the employee
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this.title;
    };
}


//Employee is then exported to be used in different classes
module.exports = Employee;