//const more = require("./utils/more")
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
        type: 'input',
        message: 'Enter your question and e-mail address : ',
        name: 'questions',
    },
    {
        type: 'list',
        message: 'Which license did you use? ',
        choices: ['GPLv3', 'MIT', 'Apache', 'N/A'],
        name: 'license',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter title to continue' } }
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
[![License: MIT](https://img.shields.io/badge/License-"${data.license}"-yellow.svg)](https://opensource.org/licenses/${data.license})
# ${data.title}
## Table of contents
1. [Description](#description)
2. [Instalation](#instalation)
3. [Usage](#usage)
4. [Contributions](#contributions)
5. [Test](#test)
6. [Questions](#questions)
7. [License](#license)
8. [Contact](#contact)
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
## Questions
(Answers will be returned via E-mail)
${data.questions}
## Contact
GitHub : https://www.github.com/${data.gitHub}    
E-mail : ${data.eMail}
### License : ${data.license}
[${data.title}]
Copyright (C) [2022] [${data.gitHub}]`;
    fs.writeFileSync('Generated_README.md',template), (err) => {
        if (err) { console.log(err) } else { console.log('Readme file generated') }}
    })

