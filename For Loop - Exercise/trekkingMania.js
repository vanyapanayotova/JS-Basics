function trekkingMania(input) {
    let groupsClimbers = Number(input[0]);
    let musalla = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < groupsClimbers + 1; i++) {
        let climbers = Number(input[i]);

        if (climbers <= 5) {
            musalla += climbers;
        } else if (climbers <= 12) {
            montBlanc += climbers;
        } else if (climbers <= 25) {
            kilimanjaro += climbers;
        } else if (climbers <= 40) {
            k2 += climbers;
        } else if (climbers >=41) {
            everest += climbers;
        }
    }
    let total = musalla + montBlanc + kilimanjaro + k2 + everest;

    console.log(`${((musalla / total) * 100).toFixed(2)}%`);
    console.log(`${((montBlanc / total) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / total) * 100).toFixed(2)}%`);
    console.log(`${((k2 / total) * 100).toFixed(2)}%`);
    console.log(`${((everest / total) * 100).toFixed(2)}%`);
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])