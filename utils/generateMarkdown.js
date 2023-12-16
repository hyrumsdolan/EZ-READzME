function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me using the information below:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}



function renderLicenseBadge(license) {
  if (!license) return "";
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}
function renderLicenseLink(license) {
  if (!license) return "";
  return `https://opensource.org/licenses/${license}`;
}
function renderLicenseSection(license) {
  if (!license) return "";
  return `This project is licensed under the ${license} license. For more information, see the [license link](${renderLicenseLink(license)}).`;
}


module.exports = generateMarkdown;
