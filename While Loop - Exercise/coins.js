function coins(input) {
    let money = Number(input[0]);
    let qty = 0;

    while (money != 0) {
        money = money.toFixed(2);
        if (money >= 2) {
            money = money - 2;
            qty++
        } else if (money >= 1) {
            money = money - 1;
            qty++
        } else if (money >= 0.50) {
            money = money - 0.50;
            qty++
        } else if (money >= 0.20) {
            money = money - 0.20;
            qty++
        } else if (money >= 0.10) {
            money = money - 0.10;
            qty++
        } else if (money >= 0.05) {
            money = money - 0.05;
            qty++
        } else if (money >= 0.02) {
            money = money - 0.02;
            qty++
        } else if (money >= 0.01) {
            money = money - 0.01;
            qty++
        }

    }

    console.log(qty);
}
coins(["1.23"])