function betweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operation = input[2];
    let result = 0;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '%':
            result = num1 % num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    if (operation === '+' || operation === '-' || operation === '*') {
        if (result % 2 === 0) {
            console.log(`${num1} ${operation} ${num2} = ${result} - even`);
        } else {
            console.log(`${num1} ${operation} ${num2} = ${result} - odd`);
        }
    }
    else if (operation === '/') {
        if (num1 === 0) {
            console.log(`Cannot divide ${num2} by zero`);
        } else if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            console.log((`${num1} ${operation} ${num2} = ${result.toFixed(2)}`));
        }
    }
     else if (operation === '%') {
        if (num1 === 0) {
            console.log(`Cannot divide ${num2} by zero`);
        } else if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            console.log((`${num1} ${operation} ${num2} = ${result}`));
        }
    }
}
betweenNumbers(["10",
"20",
"+"])