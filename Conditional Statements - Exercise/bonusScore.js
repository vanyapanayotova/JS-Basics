function bonusScore(input) {
    score = Number(input[0]);
    bonus = 0;

    if (score <= 100) {
        bonus = 5;
    } else if (score > 1000) {
        bonus = score * 0.1;
    }else if (score > 100) {
        bonus = score * 0.2;
    } 

    if (score % 2 == 0) {
        bonus += 1; 
    }else if (score % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(bonus + score);
}
bonusScore(["2703"]);