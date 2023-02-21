const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        message: 'Whats the name of your repository? ',
        name: 'title',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter title to continue' } }
    },
    {
        type: 'input',
        message: 'Describe your project: ',
        name: 'description',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter title to continue' } }
    },
    {
        type: 'input',
        message: 'Enter instalation instructions(if there are any): ',
        name: 'instalation',
    },
    {
        type: 'input',
        message: 'Enter usage information(if there is any): ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Which license did you use? ',
        choices: ['GPLv3', 'MIT', 'Apache', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Username (Github): ',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'E-mail: ',
        name: 'eMail',
    },

]).then((data) => {
const template = `
[![License: ${data.license}](https://img.shields.io/badge/License-"${data.license}"-yellow.svg)](https://opensource.org/licenses/${data.license})
# ${data.title}
## Table of contents
1. [Description](#description)
2. [Instalation](#instalation)
3. [Usage](#usage)
4. [Contributions](#contributions)
5. [Test](#test)
6. [License](#license)
7. [Contact](#contact)
## Description
${data.description}
## Instalation
${data.instalation}
## Usage
${data.usage}
## Contributions
${data.contributing}
## Test
${data.tests}
## License : 
${data.license}
## Contact
GitHub : https://www.github.com/${data.gitHub}    
E-mail : ${data.eMail}

[${data.title}]
Copyright (C) [2022] [${data.gitHub}]`;
    fs.writeFileSync('generatedREADME.md',template), (err) => {
        if (err) { console.log(err) } else { console.log('Readme file generated') }}
    })

