//const generate = require("./utils/more")
const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type:'input',
        message: 'Whats the name of your repository? ',
        name: 'title',
        validate: (notBlank) => {if(notBlank) {return true}else {return'enter title to continue'}}
    },
    {
        type: 'input',
        message: 'Describe your project: ',
        name: 'description',
        validate: (notBlank) => {if(notBlank) {return true}else {return'enter title to continue'}}
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
        message: 'Which license did you use? ',
        choices: ['GPL','MIT','Apache','GNU','N/A'],
        name: 'license',
        validate: (notBlank) => {if(notBlank) {return true}else {return'enter title to continue'}}
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
 
]).then((data)=> {
    const appTitle= `${data.title}`;
    const appDescription= `${data.description}`;
    const appInstalation= `${data.istalation}`;
    const appUsage= `${data.usage}`;
    const appContributing= `${data.contributing}`;
    const appTest= `${data.test}`;
    const appLicense= `${data.license}`;
    const appGitHub= `${data.gitHub}`;
    const appEmail= `${data.eMail}`;
    console.log(appTitle);
    });
/*
module.exports={
    title,
    description,
    instalation,
    usage,
    contributing,
    tests,
    license,
    gitHub,
    eMail,

}

*/