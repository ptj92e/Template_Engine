# Template_Engine

For this assignment, I was tasked with creating a program that takes user input and creates an HTML page based off the user's answers. 

## Inquirer

In this app, I had to use Inquirer to prompt the user with questions to help fill out the HTML page. Each prompt was linked to a specific class that contains different information for each employee. The user is first prompted with questions that create a manager object. From there, the user can select to either add a new engineer, intern, or to not add another employee. 

## Classes

From the prompts, the information is passed on to a class building system that returns the data through different methods. First, the inormation is passed through an employee creater that takes in name, id, and email. From there, methods are created to return that same data and that information is then exported to different constructors. Depending on which employee is created, it could be sent to a manager, engineer, or an intern constructor. Those classes each have properties that extend the original employee class. In the manager constructor, there is a super that pulls in the data from the employee class and then the manager class adds title, and office number to the original employee class. The same happens for engineer and intern. 

## Template Literals

Once each employee is created, they are pushed to an empty employee array. That array has a forEach() method on it that takes each employee, and matches it to a template literl based off of the employee's title. Then, each template literal is saved to a variable and pushed to a row array that stores the templates. After the employee array has been looped over, the row array is then sent into another template literal that contains all of the HTML information for the page that is to be generated. 

## FS

Once the HTML information has all been gathered, it is then passed into a function that writes the html into a file that contains all of the information from the promts. That newly generated html file is saved into a folder called "output". 