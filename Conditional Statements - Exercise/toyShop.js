function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let sumToys = puzzles * 2.60 + dolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2;
    let countToys = puzzles + dolls + teddyBears + minions + trucks;

    if (countToys >= 50) {
        sumToys *= 0.75;
    }
    sumToys *= 0.90;

    let moneyLeft = Math.abs(sumToys - tripPrice);
    if (sumToys >= tripPrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyLeft = (tripPrice - sumToys);
        moneyLeft =
            console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);