#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWellcome to Code with Abdul Quddus CLi-Number-Guessing-Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):"
    }
])
if (answer.UserGuessNumber === randomNumber) {
    console.log("Congratulation! You guess a correct number");
}
else{
    console.log("Sorry! You guess a wrong number");
    
}