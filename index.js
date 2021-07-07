// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project'
      },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a licence for your project.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What dependancies need to be installed? Please provide detailed description with commands.'
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

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('utils/file-generator/Readme.md', data, err => {
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
    promptUser()
    .then(questions => {
        return generateMarkdown(questions);
    })
    .then(formattedPage => {
        return writeToFile(formattedPage);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
    }


// Function call to initialize app
init();
