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
        message: 'Please provide the name of your project'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
