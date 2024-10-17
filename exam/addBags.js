function addBags(input) {

    let baggageFees = Number(input[0]);
    let kgBags = Number(input[1]);
    let daysUntilTravel = Number(input[2]);
    let numBags = Number(input[3]);
    //let priceOfBags = kgBags / numBags;

    if (baggageFees > 0) {
        if (kgBags < 10) {
            baggageFees = baggageFees * 0.20;
        } else if (kgBags <= 20) {
            baggageFees = baggageFees / 2;
        } else {
            baggageFees = baggageFees;
        }
    }
    if (daysUntilTravel > 0) {
        if (daysUntilTravel < 7) {
            baggageFees = baggageFees + baggageFees * 0.40;
        } else if (daysUntilTravel <= 30) {
            baggageFees = baggageFees + baggageFees * 0.15;
        } else if (daysUntilTravel > 30) {
            baggageFees = baggageFees + baggageFees * 0.10;
        }
    }
    console.log(`The total price of bags is: ${(baggageFees * numBags).toFixed(2)} lv.`);
}
addBags([25.50,5,36,6]);

//([25.50,5,36,6])

//([30,18,15,2]);

//([63.80,23,3,1])