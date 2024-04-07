#! /usr/bin/env node
import inuqirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold.italic("\n\tWEllCOME TO CODE WITH- 'ABDUL-QUDDUS' -CURRENCY CONVERTER\n"));
// Define the list of currencies and thier exchange rates:
const currency = {
    "USB": 1, // Base Currency
    "EUR": 0.9, // European Currency
    "JAP": 113, // Japanese Curreny
    "CAD": 1.3, // Canadian Curreny
    "INR": 71, // Indian Curreny
    "AFG": 69, // Afghanistan Curreny
    "PKR": 280 // PAkistan Rupees
    // Add more currencies and their exchange rates here
};
let user_answer = await inuqirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow("Select the currency to convert from:"),
        choices: ["USB", "EUR", "JAP", "CAD", "INR", "AFG", "PKR",]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow("Select the currency to convert into:"),
        choices: ["USB", "EUR", "JAP", "CAD", "INR", "AFG", "PKR",]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.grey("Enter the amount to convert:")
    }
]);
// Perform currency coversion by using formula
let from_amount = currency[user_answer.from_currency];
let to_amount = currency[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
