let Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email, "Manager");
        this.title = "Manager";
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;