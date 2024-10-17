function tradeoutput(input) {
    let town = input[0];
    let qty = Number(input[1]);
    let output = 'error';

    switch (town) {
        case 'Sofia':
            if (qty >= 0 && qty <= 500) {
                output = qty * 0.05;
            } else if (qty > 500 && qty <= 1000) {
                output = qty * 0.07;
            } else if (qty > 1000 && qty <= 10000) {
                output = qty * 0.08;
            } else if (qty > 10000) {
                output = qty * 0.12;
            }
            break;

        case 'Varna':
            if (qty >= 0 && qty <= 500) {
                output = qty * 0.045;
            } else if (qty > 500 && qty <= 1000) {
                output = qty * 0.075;
            } else if (qty > 1000 && qty <= 10000) {
                output = qty * 0.10;
            } else if (qty > 10000) {
                output = qty * 0.13;
            }
            break;

        case 'Plovdiv':
            if (qty >= 0 && qty <= 500) {
                output = qty * 0.055;
            } else if (qty > 500 && qty <= 1000) {
                output = qty * 0.08;
            } else if (qty > 1000 && qty <= 10000) {
                output = qty * 0.12;
            } else if (qty > 10000) {
                output = qty * 0.145;
            }
            break;
    }

    if (output !== "error") {
        console.log(output.toFixed(2));
    } else {
        console.log(output);
    }
}
tradeoutput(["Plovdiv","499.99"]);