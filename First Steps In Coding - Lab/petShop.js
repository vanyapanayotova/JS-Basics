function petShop(input) {
    let DogFood = Number(input[0]);
    let CatFood = Number(input[1]);
    let SumDogFood = DogFood * 2.50;
    let SumCatFood = CatFood * 4.00;
    let SumFood = SumCatFood + SumDogFood;
    console.log(`${SumFood} lv.`);
}

petShop(["5 ", "4 "])