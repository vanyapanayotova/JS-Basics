function hotelRoom(input) {
    let month = input[0];
    let nigthCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = nigthCount * 50;
            apartmentPrice = nigthCount * 65;

            if (nigthCount > 7 && nigthCount <= 14) {
                studioPrice = studioPrice - studioPrice * 0.05;
            } else if (nigthCount > 14) {
                studioPrice = studioPrice - studioPrice * 0.30;
            }
            break;

        case 'June':
        case 'September':
            studioPrice = nigthCount * 75.20;
            apartmentPrice = nigthCount * 68.70;

            if (nigthCount > 14) {
                studioPrice = studioPrice - studioPrice * 0.20;
            }
            break;

        case 'July':
        case 'August':
            studioPrice = nigthCount * 76;
            apartmentPrice = nigthCount * 77;
            break;
    }

    if (nigthCount > 14) {
        apartmentPrice = apartmentPrice - apartmentPrice * 0.10;
    }

    console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);
}
hotelRoom(["June",
"14"])

// May, June, July, August, September или October
