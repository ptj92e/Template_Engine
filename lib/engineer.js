let Employee = require('./Employee');
//This is extending the Employee class with the new role as Engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //Super is taking in what was sent from the employee class and added to the new engineer class
        super(name, id, email);
        this.title = "Engineer";
        this.github = github;

    }
    getGithub() {
        return this.github;
    }
}
//This is exporting engineer to the app.js page
module.exports = Engineer;