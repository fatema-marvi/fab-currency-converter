import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 75.57,
    PKR: 280
};
let userChoose = await inquirer.prompt([{
        name: "from",
        message: "emter from currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    { name: "to",
        message: "emter to currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'enter your amounts',
        type: 'number'
    }
]);
let fromAmount = currency[userChoose.from];
let toAmount = currency[userChoose.to];
let amount = userChoose.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
