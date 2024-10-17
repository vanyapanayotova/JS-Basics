function cleverLily(imput) {
    let years = Number(imput[0]);
    let washingMashinePrice = Number(imput[1]);
    let toyPrice = Number(imput[2]);

    let total = 0;
    let moneyGiven = 0;

    for (let i = 1; i <= years; i++) {
        if (i % 2 === 0) {
            moneyGiven = moneyGiven + 10;
            total += moneyGiven - 1;
            
        } else {
            total += toyPrice;
        }
    }
    if (washingMashinePrice <= total) {
        console.log(`Yes! ${(total - washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashinePrice - total).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);
