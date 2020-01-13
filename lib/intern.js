let Employee = require('./Employee');
//This is extending the Employee class with the new role as Intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        //Super is taking in what was sent from the employee class and added to the new intern class
        super(name, id, email);
        this.title = "Intern";
        this.school = school;

    }
    getSchool() {
        return this.school;
    }
}
//This is exporting intern to the app.js page
module.exports = Intern;