function cake(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let volume = w * h;
    let pieces = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] === "STOP") {
            break;
        } else {
            pieces += Number(input[i]);
        }
    } if (pieces < volume) {
        console.log(`${volume - pieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${pieces - volume} pieces more.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])




