// Write a JS function that takes two numbers and a string as input. The string may be one of the following: '+', '-', '*', '/', '%', '**'.

function solve(num1, num2, operator){
    let result;
    switch (operator) {
        case '+': result=num1+num2; break;
        case '-': result=num1-num2; break;
        case '/': result=num1/num2; break;
        case '*': result=num1*num2; break;
        case '%': result=num1%num2; break;
        case '**': result=num1**num2; break;
    }
    console.log(result);
}

solve(3, 5.5, '*')
solve(5, 6, '+')