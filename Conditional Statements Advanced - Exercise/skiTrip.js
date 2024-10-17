function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];

    let price = 0;
    let nights = days - 1;

    switch (type) {
        case 'room for one person':
            price = nights * 18;
            break;

        case 'apartment':
            price = nights * 25;
            if (days < 10) {
                price = price - price * 0.3;
             } else if (days < 15) {
                price = price - price * 0.35;
             } else {
                price = price - price * 0.50;
             }
            break;

        case 'president apartment':
            price = nights * 35;
            if (days < 10) {
                price = price - price * 0.1;
             } else if (days < 15) {
                price = price - price * 0.15;
             } else {
                price = price - price * 0.20;
             }
            break;

            
    }
    switch (grade) {
        case 'positive':
            price = price + price * 0.25;
            break;
    
        case 'negative':
            price = price - price * 0.10;
            break;
    }
    console.log(price.toFixed(2));
}

skiTrip(["12",
"room for one person",
"positive"])