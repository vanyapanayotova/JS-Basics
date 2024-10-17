function newHouse(input) {
    let typeFlowers = input[0];
    let qtyFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let finelPrice = 0;

    if (typeFlowers == 'Roses') {
        if (qtyFlowers > 80) {
            finelPrice = (qtyFlowers * 5) - (qtyFlowers * 5) * 0.10;
        } else {
            finelPrice = (qtyFlowers * 5);
        }
    } else if (typeFlowers == 'Dahlias') {
        if (qtyFlowers > 90) {
            finelPrice = (qtyFlowers * 3.80) - (qtyFlowers * 3.80) * 0.15;
        } else {
            finelPrice = (qtyFlowers * 3.80);
        }
    } else if (typeFlowers == 'Tulips') {
        if (qtyFlowers > 80) {
            finelPrice = (qtyFlowers * 2.80) - (qtyFlowers * 2.80) * 0.15;
        } else {
            finelPrice = (qtyFlowers * 2.80);
        }
    } else if (typeFlowers == 'Narcissus') {
        if (qtyFlowers < 120) {
            finelPrice = (qtyFlowers * 3) + (qtyFlowers * 3) * 0.15;
        } else {
            finelPrice = (qtyFlowers * 3);
        }
    } else if (typeFlowers == 'Gladiolus') {
        if (qtyFlowers < 80) {
            finelPrice = (qtyFlowers * 2.50) + (qtyFlowers * 2.50) * 0.20;
        } else {
            finelPrice = (qtyFlowers * 2.50);
        }
    }

    if (budget >= finelPrice) {
        console.log(`Hey, you have a great garden with ${qtyFlowers} ${typeFlowers} and ${(budget - finelPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finelPrice - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus", "119", "360"]);
