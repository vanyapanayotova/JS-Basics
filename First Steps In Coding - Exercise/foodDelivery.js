function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegieMenus = Number(input[2]);

    let priceChickenMenus = chickenMenus * 10.35;
    let priceFishMenus = fishMenus * 12.40;
    let priceVegieMenus = vegieMenus * 8.15;
    let fullPrice = priceChickenMenus + priceFishMenus + priceVegieMenus;
    let priceDessert = fullPrice * 20 / 100;
    let priceDelivery = fullPrice + priceDessert + 2.50;

        console.log(priceDelivery);
}

foodDelivery(["2", "4", "3"]);
