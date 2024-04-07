#! /usr/bin/env node
import inuirer from "inquirer"


// Define the list of currencies and thier exchange rates:
const currency:any = {
    "USB":1,
    "EUR":0.9,
    "GBP":113,
    "INR":1.3,
    "AFG":69,
    "PKR":280
}
let user_answer = await inuirer.prompt([{
    name: "from",
    type: "list",
    message: "Enter from Currency",
    choices: []
}])