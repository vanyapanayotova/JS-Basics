function time15Min(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let mins = hour * 60 + minutes + 15;

    let newH = Math.floor(mins / 60);
    let newMin = mins % 60;

    if (newH == 24) {
        newH = 0;
    }
    if (newMin < 10) {
        console.log(`${newH}:0${newMin}`);
    }
    if (newMin >= 10) {
        console.log(`${newH}:${newMin}`);
    }
}



time15Min(["1", "6"]);