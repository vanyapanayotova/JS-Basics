function excursionSale(input) {
    let sea = Number(input[0]);
    let mountain = Number(input[1]);
    let profit = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] === "sea" && sea > 0) {
            profit
            profit += 680;
            sea--;
        } else if (input[i] === "mountain" && mountain > 0) {
            profit += 499;
            mountain--;
        } else if (input === "Stop") {
            break;
        }

    }
    if (sea == 0 & mountain == 0) {
        console.log("Good job! Everything is sold.");
    }
    console.log(`Profit: ${profit} leva.`);

} excursionSale(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])