function accountBalance(input) {

    let index = 0;
    let increase = Number(input[index]);
    index++;
    let total = 0;

    while (increase !== "NoMoreMoney") {
        increase = Number(increase);

        if (increase <= 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${increase.toFixed(2)}`);
        total += increase;

        increase = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
