let Employee = require('./Employee');
//This is extending the Employee class with the new role as Manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //Super is taking in what was sent from the employee class and added to the new manager class
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
//This is exporting manager to the app.js page
module.exports = Manager;