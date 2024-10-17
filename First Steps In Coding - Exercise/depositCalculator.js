function depositCalculator(input) {
    let amountDeposited = Number(input[0]);
    let termDepositInMonth = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let interest = amountDeposited * annualInterestRate/100;
    let intForMonth = interest / 12;
    let amount = amountDeposited + (termDepositInMonth * intForMonth);
    console.log(amount);

}
depositCalculator(["200 ",
"3 ",
"5.7 "]);
