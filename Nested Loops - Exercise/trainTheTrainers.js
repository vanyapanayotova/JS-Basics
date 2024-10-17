function trainTheTrainers(input) {
    let jury = Number(input[0]);
    let task = "";
    let scoreOneTask = 0;
    let avgScoreForOneTask = 0;
    let sumScore = 0;
    let avgScore = 0;
    let taskCounter = 0;
    let index = 1;
    task = input[index];

    while (task !== "Finish") {
        index++;
        taskCounter++;
        for (let j = 1; j <= jury; j++) {
            let j = Number(input[index++]);
            scoreOneTask += j;
        }
        avgScoreForOneTask = scoreOneTask / jury;
        sumScore += scoreOneTask;
        console.log(`${task} - ${avgScoreForOneTask.toFixed(2)}.`);
        scoreOneTask = 0;
        task = input[index];
    }
    avgScore = sumScore / (taskCounter * jury);
    console.log(`Student's final assessment is ${avgScore.toFixed(2)}. `);
}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]);