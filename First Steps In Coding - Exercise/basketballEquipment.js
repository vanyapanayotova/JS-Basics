function backetballEquipment(input) {
    let expenses = Number(input[0]);

let basketShoes = expenses - expenses * 0.4;
let basketClothes = basketShoes - basketShoes * 0.2;
let basketBall = basketClothes / 4;
let  basketAcc = basketBall / 5;
totalPrice = basketShoes + basketClothes + basketBall + basketAcc + expenses;

console.log (totalPrice);
}
backetballEquipment(["365"]);
