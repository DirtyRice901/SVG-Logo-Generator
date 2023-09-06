//  Include packages needed for this application //
const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./utils/generateLogo');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create an array of questions for user input
const questions = [
    {
        type: "list",
        message: "What shape do you want your SVG to be?",
        name: "shape",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ]
    },
    {
        type: "input",
        message: "What color do you want your shape to be?",
        name: "shape_color",
    },
    {
        type: "input",
        message: "Please enter the text up to three characters long",
        name: "text",
    },
    {
        type: "input",
        message: "What color do you want your text to be?",
        name: "text_color",
    },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function to write SVG file

function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            return console.log(err);
        }
      console.log('Generated logo.svg');    
  });
}; 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function to initialize app  

function init() {
    inquirer.prompt(questions).then((data) =>{
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    }); 
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function call to initialize app

init();



    
