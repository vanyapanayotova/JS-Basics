function godzilla(input) {
    let filmBudget = Number(input[0]);
    let extras = Number(input[1]);
    let priceForClothingForPerson = Number(input[2]);

    let priceDecor = filmBudget - filmBudget * 0.90;
    let priceClothing = 0;
    let filmExpenses = 0;

    if (extras >= 150) {
        priceClothing = priceForClothingForPerson * extras - priceForClothingForPerson * extras * 0.10;
    } else if (extras < 150) {
        priceClothing = priceForClothingForPerson * extras;
    }
    filmExpenses = priceClothing + priceDecor;

    if (filmExpenses <= filmBudget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(filmBudget - filmExpenses).toFixed(2)} leva left.`);
    } else if (filmExpenses > filmBudget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(filmExpenses - filmBudget).toFixed(2)} leva more.`);
    }
} 

godzilla(["15437.62",
"186",
"57.99"])