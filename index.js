//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

//Create an array of questions for user input
const markdownPrompt = [

    {
        type: "input",
        name: "projectTitle",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "How would you decribe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Whats license(s) did you use?",
        choices: ["Apache", "GPL", "MIT"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "How did you test this project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

//Create a function to write README file
function writeToFile(fileName, markdownPrompt) {
    fileName = `readme.md`
    fs.writeFile(fileName, markdownPrompt, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("We did it!")
        }
    })
};

// Create a function to initialize app
function init() {
    inquirer.prompt(markdownPrompt).then((answers) => {
        const markdown = generateMarkdown(answers)
        writeToFile(`readme.md`, markdown), err =>
        err ? console.log(err) : console.log("We did it!")

    })

};
// Function call to initialize app
init();
