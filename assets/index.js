const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How to test your project?',
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
      "No license",
      "Apache License 2.0",
      "GNU v3",
      "MIT",
      "BSD 2-Clause",
      "BSD-3-Clause",
      "Boost",
      "Creative Commons",
      "Eclipse",
      "GNU GPL v3",
      "Mozilla",
      "The Unlicense",
    ],
  },
];

function renderLicenseBadge(license) {
    let licenseFormatted = license.toLowerCase().split(' ').join('%20');
    if (licenseFormatted === 'no%20license') {
      return '';
    } else {
      return `![GitHub](https://img.shields.io/badge/license-${licenseFormatted}-blue)`;
    }
  }

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
  
      console.log("Successfully wrote: " + fileName);
    });
  }
  
  function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        let output = 
        `# ${answers.projectTitle}
  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## License
  ${answers.license}
        `;
  
        writeToFile("README.md", output);
      });
  }
  
  init();