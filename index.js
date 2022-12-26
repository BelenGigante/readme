
const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type:'input';
        message: 'Whats the name of your project: ';
        name: 'title';
        validate: (notBlank) => if(notBlank) {return true}else {return'enter title to continue'}
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