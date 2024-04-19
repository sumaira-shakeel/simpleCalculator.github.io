

import inquirer from "inquirer"

let answer = await inquirer.prompt([{
    type:"number",
    name:"firstNumber",
    message:"Enter your first number:"
},
{
    type:"number",
    name:"secondNumber",
    message:"Enter your second number:"
},
{
    type:"list",
    name:"operator",
    message:"select an operator:",
    choices:['Addition','Subtraction','Multiplication','Division']
}
]);
if(answer.operator = 'Addition' ){
    console.log(answer.firstNumber + answer.secondNumber);
}else if( answer.operator = 'Subtraction'){
    console.log(answer.firstNumber - answer.secondNumber);
}else if( answer.operator = 'Multiplication'){
    console.log(answer.firstNumber * answer.secondNumber);
}else if( answer.operator = 'Division'){
    console.log(answer.firstNumber / answer.secondNumber);
}
    