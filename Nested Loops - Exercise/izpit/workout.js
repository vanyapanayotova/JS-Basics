function workout(input) {
    let days = Number(input[0]);
    days++;
    let firstDayKm = Number(input[1]);
    let kmPerDay = firstDayKm;
    let totalKm = firstDayKm;
    let beforeDay = 0;

    for (let day = 2; day <= days; day++) {
        // kmPerDay = Number(input[day]);
        kmPerDay = kmPerDay + kmPerDay * (input[day] / 100);
        totalKm += kmPerDay;
    }

    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);

    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`);
    }

}
workout(["4",
"100",
"30",
"50",
"60",
"80"])