
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
 
])

/*const generate = require("./utils/more")

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message:'What is the title of your project?',

    }
])
.then((response) => {
    console.log(generate(response));
})

*/