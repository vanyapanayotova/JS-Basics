function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
    let rent = 0;

    if (season == 'Spring') {
        if (fisherCount <= 6) {
            rent = 3000 - 3000 * 0.10;
        } else if (fisherCount <= 11) {
            rent = 3000 - 3000 * 0.15;
        } else {
            rent = 3000 - 3000 * 0.25;
        }
    } else if (season == 'Summer' || season == 'Autumn') {
        if (fisherCount <= 6) {
            rent = 4200 - 4200 * 0.10;
        } else if (fisherCount <= 11) {
            rent = 4200 - 4200 * 0.15;
        } else {
            rent = 4200 - 4200 * 0.25;
        }
    } else if (season == 'Winter') {
        if (fisherCount <= 6) {
            rent = 2600 - 2600 * 0.10;
        } else if (fisherCount <= 11) {
            rent = 2600 - 2600 * 0.15;
        } else {
            rent = 2600 - 2600 * 0.25;
        }
    }
    
    if (season !== 'Autumn' && fisherCount % 2 === 0) {
        rent = rent - rent * 0.05;
    }

    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3600","Autumn","6"]);