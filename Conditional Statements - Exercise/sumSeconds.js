function sumSeconds(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);
    let sumTime = time1 + time2 + time3;

    let minutes = Math.floor(sumTime / 60);
    let seconds = sumTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    if (seconds >= 10) {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["22", "7", "34"]);