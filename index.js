// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What is the description of your project?", "What are the installation instructions for your project?", "What are the usage instructions for your project?", "What are the contribution guidelines for your project?", "What are the test instructions for your project?", "What license would you like to use for your project?", "What is your GitHub username?", "What is your email address?"];
inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation',
        },

// TODO: Create a function to write README file
function createReadMe('README.md', data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
