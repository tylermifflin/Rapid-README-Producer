// added const for inquirer and fs in order to call and use them in my code to write a README file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// created a const for the questions array to be used in the inquirer prompt
const questions = ["What is the title of your project?", "What is the description of your project?", "What are the installation instructions for your project?", "What are the usage instructions for your project?", "What are the contribution guidelines for your project?", "What are the test instructions for your project?", "What license would you like to use for your project?", "What is a link to your GitHub profile?", "What is your email address?"];
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
            type: 'input',
            message: questions[6],
            name: 'license',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        },
    ])
    // used a then to store the answers to the questions in a const called readme, used a template literal to store the answers to the questions in the readme const
    .then((response) => {
        const readme = `# ${response.title}
    ## Description
    ${response.description}
    ## License
    ${response.license}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)
    * [Questions](#questions)
    ## Installation
    ${response.installation}
    ## Usage
    ${response.usage}
    ## Contribution
    ${response.contribution}
    ## Test
    ${response.test}
    ## Questions
    If you have any questions or want to report any issues, please contact me at ${response.email} or visit my GitHub page at ${response.github}.`;
        // used fs to write the readme const to a file called README.md
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
