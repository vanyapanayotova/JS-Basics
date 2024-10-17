function yardGreening(input) {
    let budget = Number(input[0]);
    let costOfEntireYard = budget * 7.61;
    let discount = costOfEntireYard * 0.18;
    let lastPrice = costOfEntireYard - discount;
    
    console.log(`The final price is: ${lastPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"])