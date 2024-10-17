function agancyProfit(input) {

    let nameOfAirline = input[0];
    let ticketsAdults = Number(input[1]);
    let ticketsChildren = Number(input[2]);
    let netPriceAdult = Number(input[3]);
    let costServiceFee = Number(input[4]);

    let netPriceChildren = netPriceAdult - (netPriceAdult * 0.7);
    let sumPriceThickets = (ticketsChildren * (netPriceChildren + costServiceFee)) + (ticketsAdults * (netPriceAdult + costServiceFee));
    let profit = sumPriceThickets * 0.2;


    console.log(`The profit of your agency from ${nameOfAirline} tickets is ${profit.toFixed(2)} lv.`);
}
agancyProfit(["WizzAir", "15", "5", "120", "40"]);