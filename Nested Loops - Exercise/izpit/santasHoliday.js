function santasHoliday(input) {
    let daysOfStay = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];

    let nigths = daysOfStay - 1;
    let PriceForStay = 0;

    switch (typeOfRoom) {
        case "room for one person":
            PriceForStay = 18 * nigths;
            break;

        case "apartment":
            if (nigths < 10) {
                PriceForStay = (25 * nigths) - (25 * nigths) * 0.3;
            } else if (nigths <= 15) {
                PriceForStay = (25 * nigths) - (25 * nigths) * 0.35;
            } else if (nigths > 15) {
                PriceForStay = (25 * nigths) - (25 * nigths) * 0.50;
            }
            break;

        case "president apartment":
            if (nigths < 10) {
                PriceForStay = (35 * nigths) - (35 * nigths) * 0.10;
            } else if (nigths <= 15) {
                PriceForStay = (25 * nigths) - (35 * nigths) * 0.15;
            } else if (nigths > 15) {
                PriceForStay = (35 * nigths) - (35 * nigths) * 0.20;
            }
            break;
    }
    let discount = (PriceForStay + (PriceForStay * 0.25)).toFixed(2);
    let disc2 = (PriceForStay - (PriceForStay * 0.10)).toFixed(2);

    if (rating === "positive") {
        console.log(`${discount}`);
    } else if (rating === "negative") {
        console.log(`${disc2}`);
    }

}
santasHoliday(["30",
"president apartment",
"negative"])