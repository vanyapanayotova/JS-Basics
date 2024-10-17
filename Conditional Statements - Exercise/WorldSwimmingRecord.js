function worldSwimmingRecord(input) {
    let worldRecord = Number(input[0]);
    let meters = Number(input[1]);
    let sec1m = Number(input[2]);

    let newR = meters * sec1m;
    let withDelay = (meters / 15) * 12.5;
    let newRecord = newR + withDelay;

    if (newRecord < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${newRecord} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(newRecord - worldRecord)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])