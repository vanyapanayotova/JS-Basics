function foodForPets(input) {
    let days = Number(input[0]);
    let totalAmountFood = Number(input[1]);
    let totalEatenFood = 0;
    let foodEatenByDog = 0;
    let foodEatenByCat = 0;
    let totalBiscuits = 0;
    let eatenFoodByDogOnSpecificDay = 0;
    let eatenFoodByCatOnSpecificDay = 0;
    let day = 1;
    let foodLeft = totalAmountFood;

    for (let i = 2; i < input.length; i++) {
        if (day > days) {
            break;
        }
        
        if (foodLeft > 0) {
            eatenFoodByDogOnSpecificDay = Number(input[i]);
            eatenFoodByCatOnSpecificDay = Number(input[++i]);
            foodEatenByDog += eatenFoodByDogOnSpecificDay;
            if (foodLeft > 0) {
                foodEatenByCat += eatenFoodByCatOnSpecificDay;
            }
            totalEatenFood = (foodEatenByDog + foodEatenByCat);
            foodLeft = totalAmountFood - totalEatenFood;

            if (day % 3 === 0) {
                totalBiscuits += (eatenFoodByDogOnSpecificDay + eatenFoodByCatOnSpecificDay) * 0.10;
            }
        }
        day++;
    }

    
    let percDog = (foodEatenByDog / totalEatenFood) * 100;
    let percCat = (foodEatenByCat / totalEatenFood) * 100;
    let percEatenFood = (totalEatenFood / totalAmountFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
    console.log(`${percEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percCat.toFixed(2)}% eaten from the cat.`);
}
foodForPets
    // ([3,1000,300,20,100,30,110,40]);
    ([3, 0, 100, 30, 110, 25, 120, 35]);
