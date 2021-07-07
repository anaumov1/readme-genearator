// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
   if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {if (!license) return "";
return "LICENSE";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (!license) return "";
  return `this project is s licensed under the [${license}](${renderLicenseLink(license)})`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation
  
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  ${data.contribute}

  ## Tests
 
  ${data.test}


  ## Questions
If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).


`;
}

module.exports = generateMarkdown;
