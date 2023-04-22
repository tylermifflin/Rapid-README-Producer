// added const for inquirer, fs, and generateMarkdown in order to call and use them in my code to write a README file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

// created a const for the questions array to be used in the inquirer prompt
const questions = ["What is the title of your project?", "What is the description of your project, what was your motivation, why did you build it, what problem does it solve, and what did you learn?", "What are the installation instructions for your project?", "What are the usage instructions for your project?", "What are the contribution guidelines for your project?", "What are the test instructions for your project?", "What license would you like to use for your project?", "What is your GitHub username?", "What is your email address?"];
// used inquirer to prompt the user with the questions array, used input to store the answers to the name section 
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
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribution',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'test',
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        },
    ])
    // function to write the readme file
        // used fs to write the readme const to a file called README.md
    .then((response) => {
        const readme = generateMarkdown(response);
        fs.writeFile('README.md', readme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

// function to run the inquirer prompt when index.js is run
function init() {
    inquirer.prompt 
}

// Function call to initialize app
init();
