"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
//runs confirmations that the imput is valid and the calculations
function main() {
    //prompts cli input
    var firstStr = (0, readline_sync_1.question)('Enter first number\n');
    var operator = (0, readline_sync_1.question)('Enter Operator\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number:\n');
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) //run operations if input is valid
     {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else //rerun imput if input form is invalid
     {
        console.log('\ninvalid input\n');
        main();
    }
}
// confirms input is actually a number and returns true or false
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = Boolean((maybeNum));
    return isNum;
}
function isOperator(operator) {
    //confirms that operator is one of below characters
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
main();
