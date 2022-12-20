const inquirer = require('inquirer');
const fs = require('fs');

const prompt = inquirer.createPromptModule();

const writeToFile = (html, firstnName) => {
    try {
        fs.writeFileSync('index.html', html);
    } catch(err) {
        console.log(err);
    }
}

const generateHTML = (answers) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${answers.name.split(" ")[0]}Profile</title>  
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple-v1.css">
</head>
<body>
    <h1>${answers.name}</h1>
    <h2>${answers.location}</h2>
    <p>${answers.bio}</p>
    <section>
        <a href="yayayaya.linkedin/d/${answers.linkedIn}">linkedin</a>
        <a href="www.sdkscnksdk/${answers.git}">git</a>
    </section>
</body>
</html>`
//the split will grab the first name
}

prompt([
    {
        message: "What's your name?",
        name: "name",
    },
    {
        message: "Where are you from?",
        name: "location",
    },
    {
        message: "Tell me about yourself.",
        name: "bio",
    },
    {
        message: "What is your linkedin handle?",
        name: "linkedIn",
    },
    {
        message: "What is your GitHub handle?",
        name: "gitHub",
    },
]).then(generateHTML)
  .then(writeToFile)