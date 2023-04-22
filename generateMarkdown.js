// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL 3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'BSD 3') {
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL 3.0') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'BSD 3') {
        return 'https://opensource.org/licenses/BSD-3-Clause';
    } else {
        return '';
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return 'Licensed under the MIT license.';
    } else if (license === 'Apache 2.0') {
        return 'Licensed under the Apache 2.0 license.';
    } else if (license === 'GPL 3.0') {
        return 'Licensed under the GPL 3.0 license.';
    } else if (license === 'BSD 3') {
        return 'Licensed under the BSD 3 license.';
    } else {
        return '';
    }
}

// Function to generate markdown for README
function generateMarkdown(response) {
    return `# ${response.title}
${renderLicenseBadge(response.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${response.description}
## Installation
${response.installation}
## Usage
${response.usage}
## License
${renderLicenseSection(response.license)}
## Contributing
${response.contribution}
## Tests
${response.test}
## Questions
If you have any questions, please contact me at [${response.email}](mailto:${response.email}) or visit my [GitHub profile](${response.github})
`;
}



module.exports = generateMarkdown;
