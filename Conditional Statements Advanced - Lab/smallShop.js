function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let qty = Number(input[2]);
    let sum = 0;

    switch (town) {
        case 'Varna':
            switch (product) {
                case 'coffee': sum = qty * 0.45; break;
                case 'water': sum = qty * 0.70; break;
                case 'beer': sum = qty * 1.10; break;
                case 'sweets': sum = qty * 1.35; break;
                case 'peanuts': sum = qty * 1.55; break;
            }
            break;
        case 'Sofia':
            switch (product) {
                case 'coffee': sum = qty * 0.50; break;
                case 'water': sum = qty * 0.80; break;
                case 'beer': sum = qty * 1.20; break;
                case 'sweets': sum = qty * 1.45; break;
                case 'peanuts': sum = qty * 1.60; break;
            }
            break;
        case 'Plovdiv':
            switch (product) {
                case 'coffee': sum = qty * 0.40; break;
                case 'water': sum = qty * 0.70; break;
                case 'beer': sum = qty * 1.15; break;
                case 'sweets': sum = qty * 1.30; break;
                case 'peanuts': sum = qty * 1.50; break;
            }
            break;
    }
    console.log(sum);

}

smallShop(["coffee", "Varna", "2"])