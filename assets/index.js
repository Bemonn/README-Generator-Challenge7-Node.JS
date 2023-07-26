import inquirer from 'inquirer';
import fs from 'fs/promises';

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

async function writeToFile(fileName, data) {
  try {
    await fs.writeFile(fileName, data);
    console.log("Successfully wrote: " + fileName);
  } catch (err) {
    console.log(err);
  }
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions);

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

    await writeToFile("README.md", output);
  } catch (err) {
    console.log(err);
  }
}

init();