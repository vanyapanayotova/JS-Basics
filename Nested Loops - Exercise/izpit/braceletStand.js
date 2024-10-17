function braceletStand(input) {
    let moneyPerDay = Number(input[0]);
    let moneyPerDayFromSales = Number(input[1]);
    let expensesForEntirePeriod = Number(input[2]);
    let priceOfGift = Number(input[3]);

    let pocketMoney = 5 * moneyPerDay;
    let EarnedMoney = 5 * moneyPerDayFromSales;
    let totalSavedMoney = (pocketMoney + EarnedMoney) - expensesForEntirePeriod;


    if (totalSavedMoney > priceOfGift) {
        console.log(`Profit: ${totalSavedMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(priceOfGift - totalSavedMoney).toFixed(2)} BGN.`);
    }
}
braceletStand(["2.10",
"17.50",
"20.20",
"148.50"])