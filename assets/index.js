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
    type: 'input',
    name: 'license',
    message: 'Under which license is your project?',
  },
];

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
  
  ## Description
  ${answers.description}
  
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