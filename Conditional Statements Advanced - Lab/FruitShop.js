function FruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let qty = Number(input[2]);
    let price = 0;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': switch (fruit) {
            case 'banana': price = qty * 2.50; break;
            case 'apple': price = qty * 1.20; break;
            case 'orange': price = qty * 0.85; break;
            case 'grapefruit': price = qty * 1.45; break;
            case 'kiwi': price = qty * 2.70; break;
            case 'pineapple': price = qty * 5.50; break;
            case 'grapes': price = qty * 3.85; break;
            default: console.log("error"); break;
        } break;
        case 'Saturday':
        case 'Sunday': switch (fruit) {
            case 'banana': price = qty * 2.70; break;
            case 'apple': price = qty * 1.25; break;
            case 'orange': price = qty * 0.90; break;
            case 'grapefruit': price = qty * 1.60; break;
            case 'kiwi': price = qty * 3.00; break;
            case 'pineapple': price = qty * 5.60; break;
            case 'grapes': price = qty * 4.20; break;
            default: console.log("error"); break;
        } break;
        default: console.log("error"); break;
    }
    if (price !== 0) {
        console.log(price.toFixed(2));
    }
}
FruitShop(["pinerapple", "Tuesday", "2"])
