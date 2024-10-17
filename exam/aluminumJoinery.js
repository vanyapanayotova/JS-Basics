function aluminumJoinery(input) {
    let qty = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    let price = 0;

    if (type === "90X130") {
        if (qty < 60 && qty >= 30) {
            price = (qty * 110) - (qty * 110) * 0.05;
        } else if (qty >= 60) {
            price = (qty * 110) - (qty * 110) * 0.08;
        }
    } else if (type === "100X150") {
        if (qty < 80 && qty >= 40) {
            price = (qty * 140) - (qty * 140) * 0.06;
        } else if (qty >= 80) {
            price = (qty * 140) - (qty * 140) * 0.10;
        }
    } else if (type === "130X180") {
        if (qty < 50 && qty >= 20) {
            price = (qty * 190) - (qty * 190) * 0.07;
        } else if (qty >= 50) {
            price = (qty * 190) - (qty * 190) * 0.12;
        }
    } else if (type === "200X300") {
        if (qty < 50 && qty >= 25) {
            price = (qty * 250) - (qty * 250) * 0.09;
        } else if (qty >= 50) {
            price = (qty * 250) - (qty * 250) * 0.14;
        }
    }
    if (delivery === "With delivery") {
        price += 60;
    }
    if (qty > 99) {
        price = price - price * 0.04;
    }

    if (qty < 10) {
        console.log("Invalid order");
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
}
aluminumJoinery([105,"100X150","With delivery"]);

//([40, "90X130", "Without delivery"]);
//([105,"100X150","With delivery"]);
//([2, "130X180","With delivery"])