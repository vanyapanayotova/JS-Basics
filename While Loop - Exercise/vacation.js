function vacation(input) {
    let moneyForVacation = Number(input[0]);
    let availableMoney = Number(input[1]);
    let actionSpend = 0;
    let action = 0;
    
    for (let i = 2; i < input.length; i++) {
        if (input[i] === "spend") {
            availableMoney -= Number(input[++i]);
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            actionSpend++;
            action++;
        } else if (input[i] === "save") {
            availableMoney += Number(input[++i]);
            action++
            actionSpend = 0;
        }       
        
        if (actionSpend === 5) {
            console.log("You can't save the money.");
            console.log(action);
            return;
        }
    }
 
    if (availableMoney >= moneyForVacation) {
        console.log(`You saved the money for ${action} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])