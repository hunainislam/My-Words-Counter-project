#! /usr/bin/env node 

// This line is called a shebang, it tells the OS to run it with nodejs.

// Import the 'inquirer' module, which is a command line interface for Node.js

import inquirer from "inquirer";

import chalk from "chalk";

// Declare a constant 'Answers' and assign it to the result of inquirer.prompt function

// Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>  ${chalk.bold.hex('#9999FF')('Welcome To \'Code With Malik Hunain\' - Words Counter App ')}  <<<===========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<======================================>>>\n`));



const answers: {
    Sentence: string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word",
        }
    ]
)

const words = answers.Sentence.trim().split(" ")

// Print the array of words to the console
console.log(words);

// Print the words count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);

