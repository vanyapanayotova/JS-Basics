function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startPoint = Number(input[1]);
    let points = 0;
    let avgPoints = 0;
    let win = 0;
    let percent = 0;

    for (let i = 2; i < tournaments + 2; i++) {

        let result = input[i];
        if (result === "W") {
            points += 2000;
        } else if (result === "F") {
            points += 1200;
        } else if (result === "SF") {
            points += 720;
        }

        if (result === "W") {
            win++;
        }
    }
    avgPoints = (points) / tournaments;
    percent = (win / tournaments) * 100;

    console.log(`Final points: ${points + startPoint}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${percent.toFixed(2)}%`);
}
tennisRanklist(["5", "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])

