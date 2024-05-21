import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278
};
let userInput = await inquirer.prompt([
    {
        name: 'from',
        message: "Select Currency to convert: ",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "In which currency do you want to convert? ",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Amount to convert:",
        type: 'number',
    }
]);
let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let amount = userInput.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
