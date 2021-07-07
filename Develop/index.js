// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');
const createFile = require('./utils/file-generator.Readme.md')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please input your Gihub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input your email.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please provide the name of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a licence for your project.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'What dependancies need to be intalled? Please provide detailed description with commands.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'If test availlable, how to run it?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use this repository.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe a way to contribute to the repository if desired.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFileSync(createFile.join(process.cwd(), fileName), data, err => {
            if (err) {
                reject(err); 
                return;
            }
            resolve({
                ok: true,
              message: 'ReadMe was created saccesfully!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Generating README...');
        writeToFile('Readme.md', generateMarkdown({ ...inquirerResponses }));
      });
    }


// Function call to initialize app
init();
