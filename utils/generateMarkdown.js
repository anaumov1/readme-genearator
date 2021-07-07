// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) { switch (license) {
  //During office hour, instructor said we can have 5 options here
  case "MIT License":
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  case "Apache License 2.0":
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  case "GNU General Public License v3.0":
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
  case "Eclipse Public License 2.0":
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  case "Mozilla Public License 2.0":
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  default:
    return "";
}  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license !=='None') {
    return `\n* [Licence](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License 
    This repository is licensed under the ${license} license.`;
  }
  return '';
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
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`

`;
}

module.exports = generateMarkdown;
